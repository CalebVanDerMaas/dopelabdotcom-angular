import { Component, HostListener, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { exampleSvg } from '../../assets/typescripts/4Q';
import { teeShirt } from '../../assets/typescripts/teeShirt';
import { ChangeDetectorRef } from '@angular/core';
import { AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-item-detail-preview',
  templateUrl: './item-detail-preview.component.html',
  styleUrl: './item-detail-preview.component.css',
  // encapsulation: ViewEncapsulation.None
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailPreviewComponent {
  vinylSVG: string = exampleSvg;
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

  calculateDimensions(): void {
    // const rect = this.garment.nativeElement.getBoundingClientRect();
    // this.width = rect.width;
    // this.height = rect.height;
    this.bottomMargin = this.height * 0.20707596 * -1;
    this.topMargin = this.height * 0.16129032 * -1;
    this.containerHeight = this.height ;
    this.rightMargin = this.width * 0.07358739 * -1;
    this.leftMargin = this.width * 0.06701708 * -1;
  }

  @ViewChild('garment')
  garment: ElementRef;
}

