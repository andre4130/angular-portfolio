import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconRegistry } from "@angular/material/icon";
import { SkillsService } from '../skills.service';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  
 band:any = {}
 lang: string = "es";

  constructor(private ActivatedRoute: ActivatedRoute,
              private _skillsService: SkillsService,
              private matIconRegistry: MatIconRegistry,
              private router: Router,
              private domSanitizer: DomSanitizer) {
    
    this.ActivatedRoute.params.subscribe( params => {
      this.band = this._skillsService.goToBand (params ['id']);
      console.log(params)
    })

    this.matIconRegistry.addSvgIcon('Spotify',this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/spotify.svg'));
    this.matIconRegistry.addSvgIcon('Bandcamp',this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/bandcamp.svg'));
    this.matIconRegistry.addSvgIcon('Instagram',this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/instagram.svg'));
    this.matIconRegistry.addSvgIcon('Youtube',this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/youtube.svg'));
   }

  ngOnInit(): void {
  }
}
