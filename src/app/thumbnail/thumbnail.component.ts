import { Component, OnInit, Input } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {

  @Input() public thumbnail: any;
  @Input() public name: string;
  constructor(private router: Router) {
    
  }

  ngOnInit() {
}
navigateTo(event){
  if(this.name) {
    this.router.navigate(["/" + this.name]);
  }
}
}
