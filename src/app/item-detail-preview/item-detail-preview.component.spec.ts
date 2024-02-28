import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailPreviewComponent } from './item-detail-preview.component';

describe('ItemDetailPreviewComponent', () => {
  let component: ItemDetailPreviewComponent;
  let fixture: ComponentFixture<ItemDetailPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDetailPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDetailPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
