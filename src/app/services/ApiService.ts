import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  async login(email: string, password: string): Promise<any> {
    const url = `${this.baseUrl}/auth/authenticate`;
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const observable = this.http.post(url, body, { headers });
    return firstValueFrom(observable, { defaultValue: undefined });
  }

  async register(email: string, password: string, firstName: string, lastName: string): Promise<any> {
    const url = `${this.baseUrl}/auth/register`;
    const body = { email, password, firstname: firstName, lastname: lastName };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const observable = this.http.post(url, body, { headers });
    return firstValueFrom(observable, { defaultValue: undefined });
  }
  
  
}
