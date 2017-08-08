import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MessageService {
  keys : number[] = [4,5,1,3,2];
  private subject = new Subject<any>();

  constructor() { }

  sendMessage(message: any) {
    this.subject.next(message);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
