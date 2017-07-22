import { Component, OnInit } from '@angular/core';
import { ThumbnailComponent } from './../thumbnail/thumbnail.component';
import { fadeInAnimation } from '../animations/fade.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {

  public thumbnails: Array<any> = [{ mode: "vertical", href: "school", src: "assets/images/classroom", title: "ABC Montessori", description: "An American Preschool chain." },
  { mode: "vertical", href: "daycare", src: "assets/images/art", title: "Gayatri Day Care", description: "An American Preschool chain." },
  { mode: "vertical", href: "music", src: "assets/images/stationary", title: "Brahmanaad Music Academy", description: "An American Preschool chain." },
  { mode: "vertical", href: "daycare", src: "assets/images/colors", title: "Gayatri Sanskar kendre", description: "An American Preschool chain." }
  ]; 
 
  constructor() { }

  ngOnInit() { }

}
