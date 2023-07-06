import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';
import { AlumniService } from 'src/app/services/Admin/alumni.service';
import { Alumni } from 'src/app/shared/alumni.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  @Input() currAccount !: Alumni;

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
          this.router.navigate(['/sign-in']);
        }
      }
    )
    
  }
  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }

}
