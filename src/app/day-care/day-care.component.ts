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

  public thumbnails: Array<any> = [{ mode: "vertical", src: "assets/images/stationary", title: "Drawing", description: "Classical Music and Ragas." },
  { mode: "vertical", src: "assets/images/colors", title: "Indian Games", description: "An American Preschool chain." },
  { mode: "vertical", src: "assets/images/crayons", title: "Shloks", description: "An American Preschool chain." },
  { mode: "vertical", src: "assets/images/art", title: "Moral Stories", description: "An American Preschool chain." },
  { mode: "vertical", src: "assets/images/classroom", title: "Songs", description: "An American Preschool chain." },
  { mode: "vertical", src: "assets/images/colors", title: "Cleanliness", description: "An American Preschool chain." }
  ]; 
  constructor() { }

  ngOnInit() {
  }

}
