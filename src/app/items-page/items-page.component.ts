import { Component } from '@angular/core';
import { Item } from '../types';
import { Items } from '../item-data';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrl: './items-page.component.css'
})
export class ItemsPageComponent {
  items: Item[] = [];
  selectedItem: Item | null = null;

  constructor() {}

  ngOnInit(): void {
    this.items = Items; 
  }

  onSelectItem(item: Item): void {
    this.selectedItem = item;
  }

  onCloseOverlay(): void {
    this.selectedItem = null;
  }
}
