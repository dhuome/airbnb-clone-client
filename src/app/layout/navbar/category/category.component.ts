import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryService } from '../../services/category/category.service';
import { Category } from '../../types/category-model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  categoryService = inject(CategoryService);

  categories: Category[] | undefined;

  ngOnInit(): void {
    this.fetchCategories();
  }

  private fetchCategories() {
    this.categories = this.categoryService.getCategories();
  }

}
