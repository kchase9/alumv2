import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

class PermissionsService {

  constructor(private authService: AuthService){}

  canActivate(): boolean {
    return this.authService.isLoggedIn()!;
  }
}

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state :RouterStateSnapshot) => {
  return inject(PermissionsService).canActivate();
};
