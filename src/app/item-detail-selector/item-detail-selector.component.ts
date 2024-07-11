import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Item, Option} from '../types';
import { ItemDetailPreviewComponent } from '../item-detail-preview/item-detail-preview.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item-detail-selector',
  templateUrl: './item-detail-selector.component.html',
  styleUrls: ['./item-detail-selector.component.css']
})
export class ItemDetailSelectorComponent implements OnInit, AfterViewInit {
  @Input() item: Item;
  @ViewChild(ItemDetailPreviewComponent) itemDetailPreviewComponent!: ItemDetailPreviewComponent;
  
  selectedDetails: { [customOptionId: string]: string } = {};
  quantity: number = 1;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    console.log('ItemDetailSelectorComponent initialized with item:', this.item);
    if (this.item && this.item.custom_options) {
      this.item.custom_options.forEach(option => {
        this.selectedDetails[option.id] = option.options[0].name;
      });
    }
  }

  ngAfterViewInit() {
    if (this.itemDetailPreviewComponent) {
      console.log('Updating preview component with item:', this.item);
      this.itemDetailPreviewComponent.updateGarmentType(this.item.id);
    }
  }

  selectDetail(customOptionId: string, event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedDetail = selectElement.value;  // Fixed: Changed selectedElement to selectElement
    console.log('Selected detail:', customOptionId, selectedDetail);
    
    const option = this.item.custom_options
      .find(co => co.id === customOptionId)?.options
      .find(o => o.name === selectedDetail);

    if (!option) return;

    this.selectedDetails[customOptionId] = selectedDetail;
    
    if (customOptionId === 'garment_color') {
      this.updateGarmentColor(option);
    } else if (customOptionId === 'vinyl_color') {
      this.updateVinylColor(option);
    } else if (customOptionId === 'vinyl_design') {
      this.updateVinylDesign(option);
    }
  }

  updateGarmentColor(color: Option) {
    console.log('Updating garment color:', color);
    this.itemDetailPreviewComponent.updateFillColor(color.meta1);
    this.itemDetailPreviewComponent.updateStrokeColor(color.meta2);
  }

  updateVinylColor(newColor: Option) {
    console.log('Updating vinyl color:', newColor);
    this.itemDetailPreviewComponent.updateVinylColor(newColor.meta1);
  }

  updateVinylDesign(design: Option) {
    console.log('Updating vinyl design:', design);
    this.itemDetailPreviewComponent.updateVinylSymbol(design.meta1);
  }

  addToCart(): void {
    this.cartService.addToCart(this.item, this.quantity, this.selectedDetails);
    console.log('Item added to cart:', this.item, 'Quantity:', this.quantity, 'Options:', this.selectedDetails);
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}