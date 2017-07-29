import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { ThumbnailComponent } from './../thumbnail/thumbnail.component';
import { fadeInAnimation } from '../animations/fade.animation';
import { FormControlComponent } from './../form-control/form-control.component';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class MusicComponent implements OnInit {

  public state:string = "home";
  public thumbnails: Array<any> = [{ mode: "vertical", src: "assets/images/classical.png", title: "Classical Music", description: " " },
  { mode: "vertical", src: "assets/images/tabala.png", title: "Tabala", description: " " },
  { mode: "vertical", src: "assets/images/harmonium.png", title: "Harmonium", description: " " },
  { mode: "vertical", src: "assets/images/guitar.jpg", title: "Guitar", description: " " },
  { mode: "vertical", src: "assets/images/katthak.png", title: "Katthak", description: " " },
  { mode: "vertical", src: "assets/images/bharatnatyam.png", title: "Bharatnatyam", description: " " },
  { mode: "vertical", src: "assets/images/synthesizer.png", title: "Synthesizer", description: " " }
  ]; 
  private tickers: Array<string> = ["Attention: Recording studio with latest technology and quality equipments is now ready!",
      "Authorised exam center for 'Gandhrva' Kala Mahavidyalaya."];
  private cntr = 0;
  ticker = this.tickers[0];
  public eventGallery:Array<any>;
  public gallery:Array<any>;

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    var _self = this;
    setInterval(function(){_self.cntr = _self.cntr ? 0 : 1; _self.ticker = _self.tickers[_self.cntr]}, 5000);
  }

    getData(url) {
        return this.http.get(url)
            .map((res: Response) => res.json());
    }
  navigateTo(route){
      this.router.navigate(["/" + route]);
  }
  switchTo(subroute){
      this.state = subroute;
        if (subroute == 'gallery') {
            this.getData('api/v1/images/music/events').subscribe(data => { this.eventGallery = data || []; console.log(data); });
            this.getData('api/v1/images/music/general').subscribe(data => { this.gallery = data || [];console.log(data); });
        }
  }
}
