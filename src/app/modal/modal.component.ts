import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-modal',
  template: `
    <div class="app-modal hide wrapper" (click)="hideModal($event)">
      <div class="content" (click)="$event.stopPropagation()">
        <div class="title">{{title}}</div>
        <div class="main-content">
        <ng-template #dynamic></ng-template></div>
        <div class="footer">
          <button class="accept" (click)="hideModal('accept')">{{accept}}</button>
          <button class="reject" (click)="hideModal('reject')">{{reject}}</button></div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {

  private title: string = '';
  private accept: string = '';
  private reject: string = '';
  private component;
  message: any;
  subscription: Subscription;
  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
  
  constructor(private messageService: MessageService, private componentFactoryResolver: ComponentFactoryResolver){
    this.subscription = this.messageService.getMessage().subscribe(message => { this.showModal(message)});
  }

  ngOnDestroy() {this.subscription.unsubscribe();}

  getViewContainerRef(){
    return this.viewContainerRef;
  }

  showModal(data){
    this.title = data.title || 'Modal';
    this.accept = data.accept;
    this.reject = data.reject;
    jQuery('.app-modal.wrapper').removeClass('hide');
    this.addDynamicComponent(data.component);
  }

  addDynamicComponent(componentType) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    this.component = factory.create(this.viewContainerRef.parentInjector);
    this.viewContainerRef.insert(this.component.hostView);
  }

  hideModal(reason){
    if(reason.target || this.component.instance.action(reason)){
      jQuery('.app-modal.wrapper').addClass('hide');
      this.viewContainerRef.clear();
    }
  }

}
