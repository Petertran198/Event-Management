import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class CurrentUserRouteActivator implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    const isCurrentUser: boolean = !!this.authService.currentUser;
    if (isCurrentUser) {
      return isCurrentUser;
    } else {
      this.router.navigate(['./events']);
      return isCurrentUser;
    }
  }
}
