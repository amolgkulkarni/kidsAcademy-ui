import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { MessageService } from './../message.service';
import { fadeInAnimation } from '../animations/fade.animation';

@Component({
  selector: 'app-modal',
  template: `
    <div [@fadeInAnimation] class="app-modal hide wrapper" (click)="hideModal($event)">
      <div [class]="'content ' + mode " (click)="$event.stopPropagation()">
        <div class="title">{{title}}</div>
        <div [class]="(reject || accept) ? 'main-content wfooter' : 'main-content'">
        <ng-template #dynamic></ng-template></div>
        <div *ngIf="reject || accept" class="footer">
          <button *ngIf="accept" class="accept" (click)="hideModal('accept')">{{accept}}</button>
          <button *ngIf="reject" class="reject" (click)="hideModal('reject')">{{reject}}</button></div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class ModalComponent {

  title: string = '';
  accept: string = '';
  reject: string = '';
  mode: string = '';
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
    this.mode = data.mode || '';
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
