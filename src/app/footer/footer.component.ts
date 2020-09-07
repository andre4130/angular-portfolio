import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  email:string = "mailto:andre4130@gmail.com?Subject=Hello!";
  public url1: string = "";

  constructor(private matIconRegistry: MatIconRegistry,
              private router: Router,
              private domSanitizer: DomSanitizer) {
  

  this.matIconRegistry.addSvgIcon('Linkedin',this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/linkedin.svg'));
  this.matIconRegistry.addSvgIcon('GitHub',this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/github.svg'));
  this.matIconRegistry.addSvgIcon('Email',this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/email.svg'));
  this.url1 = this.router.url;
  console.log(this.url1)
}

ngOnChange() {
  this.url1 = this.router.url;
  console.log(this.url1)
}

  ngOnInit() {
    this.url1 = this.router.url;
    console.log(this.url1)
  }
}