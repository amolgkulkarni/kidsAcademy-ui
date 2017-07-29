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

  public thumbnails: Array<any> = [{ mode: "vertical", href: "school", src: "assets/images/school_logo.png", title: "ABC Montessori", description: "An American Preschool chain." },
  { mode: "vertical", href: "daycare", src: "assets/images/daycare_logo.png", title: "Gayatri Day Care", description: "Caring hands ..." },
  { mode: "vertical", href: "music", src: "assets/images/brahmanaad_logo.png", title: "Brahmanaad Music Academy", description: "Live the Music!" },
  { mode: "vertical", href: "daycare", src: "assets/images/sanskar_logo.png", title: "Gayatri Sanskar kendre", description: "Shaping tomorrow ..." }
  ]; 
 
  constructor() { }

  ngOnInit() { }

}
