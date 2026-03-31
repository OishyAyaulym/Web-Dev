import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { CATEGORIES, PRODUCTS } from './data/products';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories = CATEGORIES;
  allProducts = PRODUCTS;
  selectedCategory: Category | null = null;
  filteredProducts: Product[] = [];

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.filteredProducts = this.allProducts.filter(p => p.categoryId === category.id);
  }
}