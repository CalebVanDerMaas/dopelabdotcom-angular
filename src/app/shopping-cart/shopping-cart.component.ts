import { Component, Output, EventEmitter } from '@angular/core';
import { CartService, CartItem } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @Output() closeCart = new EventEmitter<void>();
  isOpen = false;
  cartItems: CartItem[] = [];

  constructor(public cartService: CartService) {
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
    });
  }

  updateQuantity(index: number, quantity: number): void {
    this.cartService.updateQuantity(index, quantity);
  }

  removeItem(index: number): void {
    this.cartService.removeFromCart(index);
  }

  close(): void {
    this.isOpen = false;
    this.closeCart.emit();
  }

  open(): void {
    this.isOpen = true;
  }
}