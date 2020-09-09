import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillComponent } from './skill/skill.component';
import { BandsComponent } from './bands/bands.component';
import { BandComponent } from './band/band.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'skill/:id', component: SkillComponent},
  {path: 'bands', component: BandsComponent},
  {path: 'band/:id', component: BandComponent},
  {path: 'cv', component: CvComponent},
  {path: '**', pathMatch:'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
