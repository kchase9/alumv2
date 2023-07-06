import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';
import { Alumni } from 'src/app/shared/alumni.model';
import { AlumniService } from 'src/app/services/Admin/alumni.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  @Input() currAccount!: Alumni[];
  loggedInSubscription !: Subscription;
  currUsers !: Subscription;

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
    this.currUsers = this.alumniService.getAllAlumni().subscribe(
      (users)=>
      {
        this.currAccount = users;
      }
    )
    
    
  }
  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }

}
