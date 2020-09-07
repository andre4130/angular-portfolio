import { Component, OnInit } from '@angular/core';
import { SkillsService, Band} from '../skills.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {
  
 music:Band[] = [];

  constructor(private _bandsService: SkillsService,
              private router:Router){}
   

  ngOnInit(): void {
    this.music = this._bandsService.getBands();
    console.log(this.music)
  }

  goToBand(idx:number){
    this.router.navigate(['/band', idx])
    
  }

}
