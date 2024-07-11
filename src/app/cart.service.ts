import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from './types';

export interface CartItem extends Item {
  quantity: number;
  selectedOptions: { [key: string]: string };
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor() {}

  getCart(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(item: Item, quantity: number, selectedOptions: { [key: string]: string }): void {
    const existingItemIndex = this.cartItems.findIndex(
      cartItem => cartItem.id === item.id && 
      JSON.stringify(cartItem.selectedOptions) === JSON.stringify(selectedOptions)
    );

    if (existingItemIndex > -1) {
      this.cartItems[existingItemIndex].quantity += quantity;
    } else {
      this.cartItems.push({ ...item, quantity, selectedOptions });
    }

    this.cartSubject.next([...this.cartItems]);
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.cartSubject.next([...this.cartItems]);
  }

  updateQuantity(index: number, quantity: number): void {
    if (quantity > 0) {
      this.cartItems[index].quantity = quantity;
      this.cartSubject.next([...this.cartItems]);
    } else {
      this.removeFromCart(index);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next([]);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
  }
}