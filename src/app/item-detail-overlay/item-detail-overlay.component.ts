import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../types';

@Component({
  selector: 'app-item-detail-overlay',
  templateUrl: './item-detail-overlay.component.html',
  styleUrl: './item-detail-overlay.component.css'
})
export class ItemDetailOverlayComponent {
  @Input() item: Item;
  @Output() close = new EventEmitter<void>();

  selectedItem: Item | null = null;


  onCloseClick(): void {
    this.close.emit();
  }
}
