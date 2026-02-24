import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  @Input() product!: Product; // Получаем данные от родителя
  currentImageIndex = 0;

  // Функция для галереи
  changeImage(index: number) {
    this.currentImageIndex = index;
  }

  shareOnWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
  // Переход к следующему фото
  nextImage(event: Event) {
    event.stopPropagation(); // Чтобы клик по стрелке не открывал ссылку товара
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  // Переход к предыдущему фото
  prevImage(event: Event) {
    event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }
}