import { Component, HostListener, AfterViewInit, ViewChild, ElementRef, Input} from '@angular/core';
import { forthQuarterSvg } from '../../assets/typescripts/4Q';
import { clock } from '../../assets/typescripts/clock';
import { teeShirt } from '../../assets/typescripts/teeShirt';
import { jogger } from '../../assets/typescripts/jogger';
import { ChangeDetectorRef } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { Item } from '../types';

const vinylDesigns: { [key: string]: string} = {
  '4QS': forthQuarterSvg,
  'clock': clock,
  'teeShirt': teeShirt,
  'jogger': jogger
}

const garmentMap: { [key: string]: string} = {
  'shirt': teeShirt,
  'jogger': jogger,
}

@Component({
  selector: 'app-item-detail-preview',
  templateUrl: './item-detail-preview.component.html',
  styleUrl: './item-detail-preview.component.css',
  // encapsulation: ViewEncapsulation.None
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailPreviewComponent {
  @Input() item: Item;
  vinylSVG: string = forthQuarterSvg;
  garmentSVG: string = teeShirt;
  public containerHeight: number;
  public imageHeight: number;
  public topMargin: number;
  public totalMargin: number;
  public bottomMargin: number;
  public bottomPadding: number;
  public height: number;
  public width: number;
  public rightMargin: number;
  public leftMargin: number;
  public currentFill: string = '#7B8482';
  public currentStroke: string = '#03110E';
  public currentVinylFill: string = '#A0F9E8';
  public backFill: string;
  

  public element = document.getElementById("HTML element");

  constructor(private cdr: ChangeDetectorRef) {
    this.calculateDimensions();
  }

  private resizeObserver: ResizeObserver;

  ngAfterViewInit() {
    requestAnimationFrame(() => {
      // Use another requestAnimationFrame to ensure the browser has had time to render
      requestAnimationFrame(() => {
        this.calculateDimensions();
        this.cdr.detectChanges();
      });
    });
  }
  

  ngAfterViewChecked(){
    this.width = this.garment.nativeElement.offsetWidth;
    this.height = this.garment.nativeElement.offsetHeight;
    this.calculateDimensions();

    if (this.garment.nativeElement.offsetParent){
      this.width = this.garment.nativeElement.offsetWidth;
      this.height = this.garment.nativeElement.offsetHeight;
      this.calculateDimensions();
    }
  }
 

  ngOnInit(): void {
    this.calculateDimensions();
    console.log('ngOnInit - item:', this.item)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event, element: string){
    
    // this.width = this.garment.nativeElement.offsetWidth;
    // this.height = this.garment.nativeElement.offsetHeight;

    
    // this.calculateDimensions();

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
    this.cdr.detectChanges();
  }

  updateGarmentType(itemId: string){
    if (itemId in garmentMap){
      this.garmentSVG = garmentMap[itemId];
    } else {
      console.warn('Unknown item ID:', itemId);
    }
    this.cdr.detectChanges();
  }

  calculateDimensions(): void {
    if (this.item && this.item.proportion && this.item.proportion.length > 0) {
      const proportion = this.item.proportion[0];
      this.bottomMargin = this.height * proportion.bottomMargin * -1;
      this.topMargin = this.height * proportion.topMargin * -1;
      this.containerHeight = this.height;
      this.rightMargin = this.width * proportion.rightMargin * -1;
      this.leftMargin = this.width * proportion.leftMargin * -1;
    } else {
      // Fallback to default values if proportion is not available
      // this.bottomMargin = this.height * 0.20707596 * -1;
      // this.topMargin = this.height * 0.16129032 * -1;
      // this.containerHeight = this.height;
      // this.rightMargin = this.width * 0.07358739 * -1;
      // this.leftMargin = this.width * 0.06701708 * -1;
    }
  }

  @ViewChild('garment')
  garment: ElementRef;
}

