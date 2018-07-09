import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.changeNavStyle();
  }

  changeNavStyle(){
    document.getElementById("navbar").style.background = "#222";
    document.getElementById("navLink").style.color = "#fff";
    document.getElementById("navLink2").style.color = "#fff";
    document.getElementById("navLink3").style.color = "#fff";
    document.getElementById("navLink4").style.color = "#fff";
  }

}
