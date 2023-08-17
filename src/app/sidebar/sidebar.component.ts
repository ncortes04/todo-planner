import { Component } from '@angular/core';
import { UserService, UserData } from '../services/userService';
import { CategoryService } from '../services/categoryService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  userData: UserData | null = null;
  name: string = '';
  email: string = '';
  updateInfo: boolean = false;
  addCategory: boolean = false;
  category: string = '';
  constructor(
    private userService: UserService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
  }
  getProperty(propertyName: keyof UserData): any {
    return this.userData ? this.userData[propertyName] : null;
  }
  getUpdate(): boolean {
    return this.updateInfo;
  }
  setUpdate(): void {
    this.updateInfo = !this.updateInfo;
  }
  getEditCategory(): boolean {
    return this.addCategory;
  }
  setEditCategory(): void {
    this.addCategory = !this.addCategory;
  }
  navigateCategory(category: string): void {
    this.categoryService.setSelectedCategory(category);
  }
  updateCategory(): void {
    if (this.category && this.userData) {
      this.userData.categories.push(this.category);
      this.categoryService.setLocalCategory(this.category);
      localStorage.setItem('User', JSON.stringify(this.userData));
      this.category = '';
    }
  }
  removeCategory(i: number): void {
    if (this.userData) {
      this.userData.categories.splice(i, 1);
      localStorage.setItem('User', JSON.stringify(this.userData));
    }
  }
  updateUserData(): void {
    if (this.userData) {
      this.userData.name = this.name;
      this.userData.email = this.email;
      localStorage.setItem('User', JSON.stringify(this.userData));
    }
  }
}
