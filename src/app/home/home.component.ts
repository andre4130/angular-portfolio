import { Component, OnInit } from '@angular/core';
import { SkillsService, Skill, Language} from '../skills.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  skills:Skill[] = [];
  languages: Language [] = [];
  changeText:boolean = false;
  constructor(private _skillsService:SkillsService,
              private router:Router) { }

  ngOnInit(): void {
    this.skills = this._skillsService.getSkills();
    this.languages = this._skillsService.getLanguages();
    // console.log("funcionando!")
    // console.log(this.skills)
  }
  
  goToSkill(idx:number) {
    this.router.navigate(['/skill', idx])
  }

  goToAbout() {
    this.router.navigate(['/about'])
  }

  goToBands(){
    this.router.navigate(['/bands'])
  }

  goToCV(){
    this.router.navigate(['/cv'])
  }

  goToContact(){
    this.router.navigate(['/contact'])
  }

}
