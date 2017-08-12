import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FormControlComponent } from './../form-control/form-control.component';
import { AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  activeTab: string = "upload";
public   catOptions: string = "School,Music,Day Care";
  public subCatOptions: string = "General,Events,Activities,Material,Other";
  @ViewChildren(FormControlComponent)
  private formControlComponents: QueryList<FormControlComponent>;
  constructor(private element: ElementRef, private http: Http) { 
  }

  ngOnInit() {
  }

  action(action){
    return true;
  }

  showTab(tab){
    this.activeTab = tab;
  }

  addNewUser(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
     return this.http.post('api/v1/addUser', data, options)
                   .map((res: Response) => res.json());
  }
  
  uploadFile(f){
    if(jQuery(this.element.nativeElement.querySelector("#file")).prop('files')[0]){
      f.submit();
    } else {
      alert("Please upload file!");
    }
  }

  addUser() {
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
      json['admin'] = json['license'] === 'Admin';
      this.addNewUser(json).subscribe(msg => {
        if(msg.error){
          alert('Could not add new user. Try again!')
        } else {
          alert('New User Added.')
        }
      },
      error => {
        alert('Could not connect to server. Try again!')
      });
    }

  }
}
