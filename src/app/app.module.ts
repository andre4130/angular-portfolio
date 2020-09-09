import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillComponent } from './skill/skill.component';
import { HttpClientModule } from "@angular/common/http";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ReactiveFormsModule } from '@angular/forms';  


//Servicios
import { SkillsService } from './skills.service';
import { BandsComponent } from './bands/bands.component';
import { BandComponent } from './band/band.component';
import { CvComponent } from './cv/cv.component';
import { FooterComponent } from './footer/footer.component';
import { ContactService } from './contact.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SkillComponent,
    BandsComponent,
    BandComponent,
    CvComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    HttpClientModule, 
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      radius: 50,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#333333",
      innerStrokeColor: "#808080",
      animationDuration: 1500,
    })
  ],
  providers: [SkillsService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
