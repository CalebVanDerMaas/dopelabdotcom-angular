import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { Item, Option} from '../types';
import { ItemDetailPreviewComponent } from '../item-detail-preview/item-detail-preview.component';
@Component({
  selector: 'app-item-detail-selector',
  templateUrl: './item-detail-selector.component.html',
  styleUrls: ['./item-detail-selector.component.css'] // Ensure this is corrected
})
export class ItemDetailSelectorComponent {
  dropdownOpenId: string | null = null;
  @ViewChild(ItemDetailPreviewComponent) itemDetailPreviewComponent!: ItemDetailPreviewComponent;
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
    console.log(customOptionId)
    console.log(selectedDetail)
  }

  updateColor(color: Option){
    this.itemDetailPreviewComponent.updateFillColor(color.meta1);
    this.itemDetailPreviewComponent.updateStrokeColor(color.meta2);
  }

  handleClick(optionID: string, selectedDetail: string, option: Option, optionType: string){
    this.selectDetail(optionID, selectedDetail);
    if (optionType === 'Shirt Color')
      this.updateColor(option);
  }

  ngAfterViewInit() {
    
  }
}
