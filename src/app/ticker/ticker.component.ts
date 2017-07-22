import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {

  @Input() public text: string;
  constructor() { }

  ngOnInit() {
  }

}
