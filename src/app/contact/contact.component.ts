import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { FormControlComponent } from './../form-control/form-control.component';
import 'rxjs/add/operator/map';
import { fadeInAnimation } from '../animations/fade.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ContactComponent implements OnInit {

  @ViewChildren(FormControlComponent)
  private formControlComponents: QueryList<FormControlComponent>;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  getData(){
    return this.http.get('http://rest-service.guides.spring.io/greeting')
      .map((res: Response) => res.json());
  }

  triggerMail(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
     return this.http.post('api/v1/sendMail', data, options)
                   .map((res: Response) => res.json());
  }

  sendMail(event){
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
      //this.getData().subscribe(data => {console.log(data);});
      this.triggerMail(json).subscribe(msg => {
        if(msg.error){
          alert('Could not connect to server. Try again!')
        } else {
          alert('Thanks for showing interest. We will get back within 48 hours.')
        }
      },
      error => {
        alert('Could not connect to server. Try again!')
      });
    }
  }
}
