import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { AccountServiceService } from '../../services/Admin/account-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  implements OnInit{
  @Input() currAccount !: User;
  loggedInSubscription !: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private AccountService: AccountServiceService)
    {}

  
  ngOnInit(): void {
    this.currAccount = this.AccountService.getLoggedInAccount();
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
