import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/ApiService';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  loading: boolean = false;
  password: string = '';
  firstName: string = "";
  lastName: string = "";
  isLoginActive: boolean = true;
  errorMessage: string = ""
  constructor(private apiService: ApiService, private authService: AuthService) {}

  async handleLogin() {
    if(!this.email || !this.password) {
      this.errorMessage = "All Fields Are Required";
      return
    }
    this.loading = true;

    try {
      const response = await this.apiService.login(this.email, this.password);
      if(response.token) {
        this.authService.setAuthToken(response.token)
      }
    } catch (error: any) {
      console.error(error)
      this.errorMessage = error.error.message;
    } finally {
      this.loading = false;
    }
  }
  
  async handleRegister() {
    if(!this.email || ! this.password || !this.firstName || !this.lastName) {
      this.errorMessage = "All Fields Are Required";
      return
    }
    this.loading = true;
    try {
      const response = await this.apiService.register(this.email, this.password, this.firstName, this.lastName);
      if(response.token) {
        this.authService.setAuthToken(response.token)
      }
    } catch (error: any) {
      console.error(error)
      this.errorMessage = error.error.message;
    } finally {
      this.loading = false;
    }
  }
  
  toggleLogin() {
    this.isLoginActive = true;
  }

  toggleSignup() {
    this.isLoginActive = false;
  }
}
