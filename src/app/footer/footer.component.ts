import { Component, OnInit } from '@angular/core';

import { MessageService } from './../message.service';
import { LoginComponent } from './../login/login.component'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-footer',
  template: `
        <div class="footer" (dblclick)="loginUser($event)"><span>Copyright © 2017 Kids Academy Pune - All Rights Reserved.</span></div>
  `,
  styles: [`
    div {height: 40px; font-size: inherit; background: #333; position: fixed; bottom: 0; width:100%;}
    div span{color: #eee; display: inline-block; margin: 10px;}
  `]
})
export class FooterComponent implements OnInit {

  constructor(private messageService: MessageService, private http: Http) { }

  ngOnInit() { }

  getData(url) {
    return this.http.get(url)
      .map((res: Response) => res.json());
  }
  loginUser(e) {
    this.getData('login').subscribe(msg => {
      if (msg.data == 'timeout' || msg.data == 'logout') {
        this.messageService.sendMessage({ title: 'Login', accept: 'Login', reject: 'Cancel', component: LoginComponent });
      }
    });
  }

  clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }
}
