import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../types';
import { Items } from '../item-data';

interface Detail {
  name: string;
}

@Component({
  selector: 'app-item-detail-selector',
  templateUrl: './item-detail-selector.component.html',
  styleUrl: './item-detail-selector.component.css'
})
export class ItemDetailSelectorComponent {
  dropdownOpen = false;
  dropdownOpenId: string | null = null;
  selectedDetail: Detail | null = null;
  details: Detail[] = [
    { name: 'Test1'},
    { name: 'Test2'},
    { name: 'Test3'}
  ]
  @Input() item: Item;
  @Output() close = new EventEmitter<void>();

  toggleDropdown(customOptionId: string): void {
    if (this.dropdownOpenId === customOptionId) {
      this.dropdownOpenId = null; // If it's already open, close it
    } else {
      this.dropdownOpenId = customOptionId; // Else, open the clicked dropdown
    }
  }

  isDropdownOpen(customOptionId: string): boolean {
    return this.dropdownOpenId === customOptionId;
  }
  selectDetail(item: Item): void {
    this.selectedDetail = item;
    this.dropdownOpen = false;
  }
}


