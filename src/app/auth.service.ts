import { Injectable } from '@angular/core';
import { User } from './shared/user.model';
import { BehaviorSubject, Observable, Subject, catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { UserService } from './services/Admin/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:5139"

  public errorMessage : string ="";

  loggedInAccount : User | undefined | null;
  private loggedInSubject: Subject<boolean> = new Subject<boolean>();
  loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  // Add base url here to establish a 

  constructor(private userService : UserService,
    private router: Router,
    private http: HttpClient){}

  isLoggedIn(){
    this.loggedIn$.subscribe(
      (loggedin)=>
      {
        return loggedin;
      }
    )
  }


  signin(email : string, password: string): Observable<boolean> {
    const payload = { email, password };
    return this.http.post<boolean>(`${this.baseUrl}/Login`, payload)
      .pipe(
        map((response: boolean) => {
          if (response) {
            // Successful login
            this.loggedInSubject.next(true);
            return true;
          } else {
            // Invalid login
            this.loggedInSubject.next(false);
            return false;
          }
        }),
        catchError((error: any) => {
          // Handle errors
          this.errorMessage = error?.error?.message || 'An error occurred.';
          this.loggedInSubject.next(false);
          return of(false);
        })
      );
  }

  signOut() {
    this.loggedInSubject.next(false);
    this.router.navigate(['/']);
  }

}

