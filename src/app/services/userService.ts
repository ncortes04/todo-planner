import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserData(): UserData | null {
    const localUser = localStorage.getItem('User');
    if (localUser) {
      return JSON.parse(localUser) as UserData;
    } else {
      return {
        email: '',
        name: '',
        todos: 0,
        completed: 0,
        primary: 0,
        categories: [],
      };
    }
  }
}

export interface UserData {
  email: string;
  name: string;
  todos: number;
  completed: number;
  primary: number;
  categories: string[];
}
