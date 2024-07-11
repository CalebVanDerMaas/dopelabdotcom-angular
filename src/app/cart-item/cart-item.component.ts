import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  template: `
    <div class="flex items-center py-4 border-b">
      <img [src]="'..' + item.image" [alt]="item.name" class="w-16 h-16 object-cover rounded mr-4">
      <div class="flex-grow">
        <h3 class="font-semibold">{{ item.name }}</h3>
        <p class="text-sm text-gray-600">{{ item.price | currency }}</p>
        <div class="text-xs text-gray-500">
          <span *ngFor="let option of item.selectedOptions | keyvalue" class="mr-2">
            {{ option.key }}: {{ option.value }}
          </span>
        </div>
      </div>
      <div class="flex items-center">
        <button (click)="updateQuantity(item.quantity - 1)" class="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300 transition duration-300">-</button>
        <span class="px-3 py-1 bg-gray-100">{{ item.quantity }}</span>
        <button (click)="updateQuantity(item.quantity + 1)" class="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300 transition duration-300">+</button>
      </div>
      <button (click)="removeItem()" class="ml-4 text-red-500 hover:text-red-700 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  `,
  styles: []
})
export class CartItemComponent {
  @Input() item: CartItem;
  @Output() quantityChange = new EventEmitter<number>();
  @Output() remove = new EventEmitter<void>();

  updateQuantity(newQuantity: number): void {
    if (newQuantity > 0) {
      this.quantityChange.emit(newQuantity);
    }
  }

  removeItem(): void {
    this.remove.emit();
  }
}