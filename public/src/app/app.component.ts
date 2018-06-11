import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {

     
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);
        (<any>window).gtag('config', 'UA-120615764-1',{'page_path': event.urlAfterRedirects});
      }
    });
  }
}
