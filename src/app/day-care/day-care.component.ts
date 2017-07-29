import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade.animation';
import { ThumbnailComponent } from './../thumbnail/thumbnail.component';

@Component({
  selector: 'app-day-care',
  templateUrl: './day-care.component.html',
  styleUrls: ['./day-care.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class DayCareComponent implements OnInit {

  public thumbnails: Array<any> = [
  { mode: "horizontal left", src: "assets/images/babysitting.png", title: "Baby sitting", description: " " },
  { mode: "vertical", src: "assets/images/drawing.jpg", title: "Drawing", description: " " },
  { mode: "vertical", src: "assets/images/games.jpg", title: "Indian Games", description: " " },
  { mode: "vertical", src: "assets/images/shlok.png", title: "Shloks", description: " " },
  { mode: "vertical", src: "assets/images/moralstories.jpg", title: "Moral Stories", description: " " },
  { mode: "vertical", src: "assets/images/songs.jpg", title: "Songs", description: " " },
  { mode: "vertical", src: "assets/images/cleanhabbits.png", title: "Cleanliness", description: " " }
  ]; 
  constructor() { }

  ngOnInit() {
  }

}
