import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './services/AuthService';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      console.log(this.authService.isLoggedIn())

    if (this.authService.isLoggedIn()) {
      // User is logged in, check if they are trying to access the login page
      if (state.url.includes('login')) {
        // Redirect to home page if logged-in user tries to access login page
        return this.router.createUrlTree(['/home']); // Change 'home' to your home route
      } else {
        // Allow access to other routes
        return true;
      }
    } else {
      // User is not logged in, allow access to the route
      return true;
    }
  }
}
