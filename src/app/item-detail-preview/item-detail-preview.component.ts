import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from '../types';
import { forthQuarterSvg } from '../../assets/typescripts/4Q';
import { clock } from '../../assets/typescripts/clock';
import { bars } from '../../assets/typescripts/bars';
import { teeShirt } from '../../assets/typescripts/teeShirt';
import { jogger } from '../../assets/typescripts/jogger';
import { hoodie } from '../../assets/typescripts/hoodie';
import { sweatshirt } from '../../assets/typescripts/sweatshirt';

const vinylDesigns: { [key: string]: string } = {
  '4QS': forthQuarterSvg,
  'clock': clock,
  'bars': bars,
};

const garmentMap: { [key: string]: string } = {
  'shirt': teeShirt,
  'jogger': jogger,
  'hoodie': hoodie,
  'sweatshirt': sweatshirt
};

@Component({
  selector: 'app-item-detail-preview',
  template: `
    <div class="relative w-full h-full">
      <div [innerHTML]="garmentSVG | safeHtml" class="absolute top-0 left-0 w-full h-full"></div>
      <div [innerHTML]="vinylSVG | safeHtml" class="absolute top-0 left-0 w-full h-full"></div>
    </div>
  `,
  styles: []
})
export class ItemDetailPreviewComponent implements OnInit, OnChanges {
  @Input() item!: Item;
  
  garmentSVG: string = '';
  vinylSVG: string = forthQuarterSvg;
  currentFill: string = '#7B8482';
  currentStroke: string = '#03110E';
  currentVinylFill: string = '#A0F9E8';
  public backFill: string;
  
  ngOnInit() {
    console.log('ItemDetailPreviewComponent initialized with item:', this.item);
    this.updateGarmentType(this.item.id);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ItemDetailPreviewComponent changes:', changes);
    if (changes['item'] && !changes['item'].firstChange) {
      this.updateGarmentType(this.item.id);
    }
  }

  updateGarmentType(itemId: string) {
    console.log('Updating garment type for item ID:', itemId);
    this.garmentSVG = garmentMap[itemId] || '';
    console.log('Updated garmentSVG:', this.garmentSVG ? 'SVG loaded' : 'SVG not found');
  }

  updateFillColor(newColor: string){
    this.garmentSVG = this.garmentSVG.replace(`fill: ${this.currentFill}`, `fill: ${newColor}`);
    this.currentFill = newColor;
    console.log('Fill: ' + this.currentFill)
  }

  updateStrokeColor(newColor: string){
    
    this.garmentSVG = this.garmentSVG.replace(`stroke: ${this.currentStroke}`, `stroke: ${newColor}`);
    this.currentStroke = newColor;
    console.log('Stroke: ' + this.currentStroke)
  }

  updateVinylColor(newColor: string){
    this.vinylSVG = this.vinylSVG.replace(`fill: ${this.currentVinylFill}`, `fill: ${newColor}`);
    this.currentVinylFill = newColor;
  }

  updateVinylSymbol(vinylKey: string ){
    if (vinylKey in vinylDesigns){
      this.vinylSVG = vinylDesigns[vinylKey];
    } else {
      console.warn('Unknown vinyl design: ', vinylKey);
    }
    this.backFill = this.currentVinylFill;
    this.currentVinylFill = '#A0F9E8';
    this.updateVinylColor(this.backFill);
  }
}