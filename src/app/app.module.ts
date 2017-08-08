import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SchoolComponent } from './school/school.component';
import { DayCareComponent } from './day-care/day-care.component';
import { MusicComponent } from './music/music.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TickerComponent } from './ticker/ticker.component';
import { AbcAboutComponent } from './abc-about/abc-about.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import * as $ from 'jquery';

const routes: Routes = [
  {'path':'', 'redirectTo':'/home', 'pathMatch':'full'},
  {'path':'home', 'component': HomeComponent},
  {'path':'school', 'component': SchoolComponent},
  {'path':'daycare', 'component': DayCareComponent},
  {'path':'music', 'component': MusicComponent},
  {'path':'contact', 'component': ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    HomeComponent,
    SchoolComponent,
    DayCareComponent,
    MusicComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    FormControlComponent,
    TickerComponent,
    AbcAboutComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
