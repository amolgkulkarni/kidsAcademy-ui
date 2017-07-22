import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`nav{height: 60px; background-color: #3d3d3e; position: fixed; top: 0; width:100%;z-index: 1;}
    nav div {display: inline-block;height: 60px; margin-left: 5px; border-right: 1px solid #ccc; border-radius: 4px}
    nav a {display: inline-block; margin: 20px 20px 20px 0; float: right; color: white;}
    nav img {margin: 5px; width: 50px; height: 50px; border-radius: 5px;}
    nav div:last-child {float: right; border-left: 1px solid #ccc; border-radius: 4px;}
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
