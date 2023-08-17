import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private selectedCategorySubject = new BehaviorSubject<string | null>(null);
  selectedCategorySubject$ = this.selectedCategorySubject.asObservable();

  setSelectedCategory(category: string | null): void {
    this.selectedCategorySubject.next(category);
  }
  setLocalCategory(category: string): void {
    const data: string[] = [];
    localStorage.setItem(category, JSON.stringify(data));
  }
  upDateCategory(category: string, task: task) {
    const storedData = localStorage.getItem(category);
    if (storedData) {
      const existingData = JSON.parse(storedData);
      existingData.push(task);
      localStorage.setItem(category, JSON.stringify(existingData));
    } else {
      localStorage.setItem(category, JSON.stringify([task]));
    }
  }
}
interface task {
  date: number;
  title: string;
  primary: boolean;
  completed: boolean;
}
