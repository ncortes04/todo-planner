import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKEN_KEY = 'authToken';

  constructor(private router: Router) {}

  setAuthToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.router.navigate(["home"]);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return this.getAuthToken() !== null;
  }

  removeAuthToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
