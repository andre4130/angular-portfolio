import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor() { }
  year = new Date();
  age = this.year.getFullYear() - 1985;
  
  ngOnInit(): void {
  }

}
