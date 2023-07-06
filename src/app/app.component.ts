import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alumv2';

  constructor(private router : Router){}

  goToSignIn(){
    this.router.navigate(['sign-in']);
  }
}
