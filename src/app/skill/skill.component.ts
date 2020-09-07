import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SkillsService, Images, Frontend } from '../skills.service';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html'
})

export class SkillComponent implements OnInit {
  
 skill:any = {}
 images:Images[] = []
 feProjects: Frontend [] = []

  constructor(private ActivatedRoute: ActivatedRoute,
              private _skillsService: SkillsService) {
    
    this.ActivatedRoute.params.subscribe( params => {
      this.skill = this._skillsService.goToSkill (params ['id']);
      console.log(params)
    })
   }



  ngOnInit(): void {
    this.images = this._skillsService.getImages();
    console.log(this.images)
    this.feProjects = this._skillsService.getProjects();
    console.log(this.feProjects)
  }

  /*Download PDF Method*/

  downloadPdf() {
    const pdfUrl = './assets/patents/EP3184363A1.pdf';
    const pdfName = 'patent1';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}

