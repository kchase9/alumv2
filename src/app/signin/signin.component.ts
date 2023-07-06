import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errorMessage: string = "";
  accFound : boolean = true;
  isLoggedIn: Subscription = new Subscription;

  constructor(private authService: AuthService,
    private router: Router){}
  ngOnInit(): void {
    
  }

  ngOnChanges(){
    this.errorMessage = this.authService.errorMessage;
  }

  ngOnDestroy()
  {
    this.isLoggedIn.unsubscribe()
  }

  signIn(email: HTMLInputElement, password: HTMLInputElement)
  {
  
    this.isLoggedIn = this.authService.signin(email.value, password.value).subscribe(
      (found: boolean)=>
      {
        this.accFound = found;
      }
    );
    if (this.accFound)
    {
      this.router.navigate(['/dashboard', 'account']);
    }
  }

}
