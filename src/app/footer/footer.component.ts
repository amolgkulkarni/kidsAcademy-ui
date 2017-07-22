import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
        <div class="footer"><span>Copyright © 2017 Kids Academy Pune - All Rights Reserved.</span></div>
  `,
  styles: [`
    div {height: 40px; font-size: inherit; background: #333; position: fixed; bottom: 0; width:100%;}
    div span{color: #eee; display: inline-block; margin: 10px;}
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
