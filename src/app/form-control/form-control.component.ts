import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  @Input() public name;
  @Input() public mode: string;
  @Input() public placeholder: string;
  @Input() public options: string;
  @Input() public header: string;
  @Input() public description: string;
  @Input() public required: boolean;
  value: string = '';
  css_class = '';

  @Output() submit: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    //this.css_class = this.required ? ' error' : '';
    this.value = (this.mode == 'select' && this.options) ? this.options.split(',')[0] : '';
  }
  
  validate(event){
    if(this.required && !this.value){
        this.css_class += ' error';
        return false;
    } else if(this.mode == "email"){
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
        this.css_class += ' error';
        return false;
      }
    } else if (this.mode == "number"){
      if(!/^[0-9]+$/.test(this.value)){
        this.css_class += ' error';
        return false;
      }
    } else if (this.mode == "telephone"){
      if(!/^\d{10}$/.test(this.value)){
        this.css_class += ' error';
        return false;
      }
    } else if (this.mode == "date"){
      if(!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(this.value)){
        // ToDo Check for dates according to month
        this.css_class += ' error';
        return false;
      }
    }

    this.css_class = '';
    return true;
  }

  onSubmit(event){
    this.submit.emit(this.value);
  }

  getValue(){
    return this.validate(null) ? this.value : false;
  }
}
