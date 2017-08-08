import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { FormControlComponent } from './../form-control/form-control.component';
import 'rxjs/add/operator/map';
import { fadeInAnimation } from '../animations/fade.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class LoginComponent implements OnInit {
  @ViewChildren(FormControlComponent)
  private formControlComponents: QueryList<FormControlComponent>;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  action(action){
    if(action == 'accept') return this.login();
    else return true;
  }

  processLogin(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
     return this.http.post('api/v1/login', data, options)
                   .map((res: Response) => res.json());
  }

  login(){
    var isValid=true, json = {};
    this.formControlComponents.forEach(function(component){
      if(component.mode == 'text' || component.mode == 'email' ||
      component.mode == 'textarea' || component.mode == 'select' || component.mode == 'telephone'){
        var value = component.getValue();
        if(value === false){
          isValid = false;
          return false;
        }
        json[component.name || component.mode] = value;
      }
    });
    if(isValid){
      this.processLogin(json).subscribe(msg => {
        if(msg.error){
          alert('Login Failed. Try again!')
        } else {
          alert('Thanks for showing interest. We will get back within 48 hours.')
        }
      },
      error => {
        alert('Could not login. Try again!')
      });
    }
    return isValid;
  }
}
