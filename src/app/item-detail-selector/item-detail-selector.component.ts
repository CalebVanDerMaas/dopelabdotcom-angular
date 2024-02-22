import { Component, Input } from '@angular/core';
import { Item } from '../types';

@Component({
  selector: 'app-item-detail-selector',
  templateUrl: './item-detail-selector.component.html',
  styleUrls: ['./item-detail-selector.component.css'] // Ensure this is corrected
})
export class ItemDetailSelectorComponent {
  dropdownOpenId: string | null = null;
  // Use an object to map dropdown IDs to their selected values
  selectedDetails: { [customOptionId: string]: string } = {};
  @Input() item: Item;

  toggleDropdown(customOptionId: string): void {
    this.dropdownOpenId = this.dropdownOpenId === customOptionId ? null : customOptionId;
  }

  isDropdownOpen(customOptionId: string): boolean {
    return this.dropdownOpenId === customOptionId;
  }

  // Ensure customOptionId is part of the method parameters
  selectDetail(customOptionId: string, selectedDetail: string): void {
    this.selectedDetails[customOptionId] = selectedDetail;
    this.dropdownOpenId = null;
  }
}
