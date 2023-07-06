import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlumniService } from 'src/app/services/Admin/alumni.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  loggedIn!: boolean;
  loggedInSubscription !: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alumniService: AlumniService)
    {}

  
  ngOnInit(): void {
    this.loggedInSubscription = this.authService.loggedIn$.subscribe(
      (loggedin)=>
      {
        if (!loggedin)
        {
          /* this.loggedIn = loggedin;
          console.log('logged in:', this.loggedIn); */
          // this.router.navigate(['/sign-in']);
        }
      }
    )
    
  }
  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }

  signOut(){
    this.authService.signOut();
  }

}
