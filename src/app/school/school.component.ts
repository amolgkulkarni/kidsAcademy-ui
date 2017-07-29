import { Component, OnInit } from '@angular/core';
import { ThumbnailComponent } from './../thumbnail/thumbnail.component';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../animations/fade.animation';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html',
    styleUrls: ['./school.component.scss'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})
export class SchoolComponent implements OnInit {
    public state: string = "home";
    public thumbnails: Array<any> = [
        {
            mode: "horizontal left", src: "assets/images/practical.jpg", title: "Practical Life Activities",
            description: "The practical life exercises are the very foundation for the Montessori classroom. Concentration and development stem from these essential exercises. These activities help in guiding children about 'care for self', 'care for environment', courtesy, social grace and developing fine & gross motor skills."
        },
        {
            mode: "horizontal right", src: "assets/images/sensorial.jpg", title: "Sensorial Development",
            description: "Every individual is believed to be born with certain degree of intelligence which remains the same throughout the life-span of the individual. The sensorial exercises helps in making mental constructions which supplement and complement the intelligence of the individual."
        },
        {
            mode: "vertical", src: "assets/images/maths.png", title: "Mathematics",
            description: "Students learn math more effectively by using manipulative because concrete materials provide a way for students to connect their understanding and experience with real objects to mathematical concepts. They use hands on learning material that make abstract concepts of quantity clear and concrete."
        },
        {
            mode: "vertical", src: "assets/images/physical.jpg", title: "Physical Development",
            description: "Various activities like balancing, climbing, dancing and co-ordination exercises are a part of their daily curriculum. which facilitates physical development."
        },
        {
            mode: "vertical", src: "assets/images/science.png", title: "Science",
            description: "The child is helped to understand differentiation between living and nonliving things, differentiation between animals and plants; biological parts of flowers, root systems and trees, along with anatomical features of common animals."
        },
        {
            mode: "horizontal left", src: "assets/images/art.jpg", title: "Art",
            description: "Montessori class room allows a diversity of individual expressions, personalities and cultural origins. Creativity is encouraged through imaginative drawing, painting, clay modeling, craft work and sand ply."
        },
        {
            mode: "horizontal right", src: "assets/images/language.png", title: "Language",
            description: "An enriched language program with a variety of listening, reading, and writing activities help in development of communication skills. Lot of emphasis is laid on phonetics, vocabulary building, public speaking, dramatization and visual aids."
        },
        {
            mode: "horizontal left", src: "assets/images/culture.png", title: "Geography, History, Art, Culture",
            description: "Montessori teaches history and world cultures starting as early as three. Students work with specially designed globes, puzzle maps and begin to learn names of the continents and countries and is helped to understand basic land and water formations such as island, peninsula, strait, lake, bay etc."
        }
    ];
  public materialGallery:any;
  public gallery:any;

    constructor(private router: Router, private http: Http) { }

    ngOnInit() {
    }

    getData(url) {
        return this.http.get(url)
            .map((res: Response) => res.json());
    }
    navigateTo(route) {
        this.router.navigate(["/" + route]);
    }
    switchTo(subroute) {
        this.state = subroute;
        if (subroute == 'gallery') {
            this.getData('api/v1/images/school/material').subscribe(data => { this.materialGallery = data; console.log(data); });
            this.getData('api/v1/images/school/activities').subscribe(data => { this.gallery = data; console.log(data); });
        }
    }
}
