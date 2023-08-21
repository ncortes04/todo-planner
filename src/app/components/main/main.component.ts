import { Component } from '@angular/core';
import { CategoryService } from '../../services/categoryService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  category: string | null = null;
  categories: string[] | null = null;
  selectedFilter: string = 'All';
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.categoryService.selectedCategorySubject$.subscribe(
      (selectedCategory) => {
        this.category = selectedCategory;
      }
    );
  }
  addNewTask(): void {
    if (this.category) {
      this.categoryService.upDateCategory(this.category, {
        title: 'test',
        date: Date.now(),
        primary: false,
        completed: false,
      });
    }
  }
  getFilter(): void {}
  updateFilter(filter: string): void {
    this.selectedFilter = filter;
  }
}
