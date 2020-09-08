import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { SkillsService, Skill, Language, Engineering } from '../skills.service';
import { NgModel } from '@angular/forms';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  skill:any = {}
  language:any = {};
  codes:any = {};
  skills:Skill[] = [];
  languages: Language[] = [];
  engineering: Engineering[] = [];
  

  constructor(private ActivatedRoute: ActivatedRoute,
              private _skillsService: SkillsService,
              ) {
    
   }

  ngOnInit(): void {
    this.languages = this._skillsService.getLanguages();
    this.skills = this._skillsService.getSkills();
    this.codes = this._skillsService.getCoding();
    this.engineering = this._skillsService.getEngineering();
  }

  downloadPdf() {
    const pdfUrl = './assets/cv/cv-andre_maia.pdf';
    const pdfName = 'CV_André_de_Mendonça_Maia';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  downloadPatent() {
    const pdfUrl = './assets/patents/EP3184363A1.pdf';
    const pdfName = 'patent1';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
