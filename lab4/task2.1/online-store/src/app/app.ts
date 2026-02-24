import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Импортируем твой список товаров
import { ProductListComponent } from './components/product-list/product-list'; 

@Component({
  selector: 'app-root',
  standalone: true, // Убедись, что это свойство есть
  // 2. Добавляем ProductListComponent в список импортов
  imports: [RouterOutlet, ProductListComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
}