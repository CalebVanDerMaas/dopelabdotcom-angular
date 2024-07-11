import { Component, ViewChild } from '@angular/core';
import { Item } from '../types';
import { Items } from '../item-data';
import { CartService } from '../cart.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrl: './items-page.component.css'
})
export class ItemsPageComponent {
  items: Item[] = [];
  selectedItem: Item | null = null;

@ViewChild('shoppingCart') shoppingCart: ShoppingCartComponent;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = Items; 
  }

  onSelectItem(item: Item): void {
    this.selectedItem = item;
  }

  onCloseOverlay(): void {
    this.selectedItem = null;
  }

  toggleCart(): void {
    this.shoppingCart.isOpen ? this.shoppingCart.close() : this.shoppingCart.open();
  }

  onCloseCart(): void {
    this.shoppingCart.close();
  }
}
