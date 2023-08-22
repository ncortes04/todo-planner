import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(public authService: AuthService) {}

  signOut() {
    localStorage.removeItem('jwtToken');
  }
}
