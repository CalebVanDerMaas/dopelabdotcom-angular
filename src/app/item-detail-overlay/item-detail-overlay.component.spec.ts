import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailOverlayComponent } from './item-detail-overlay.component';

describe('ItemDetailOverlayComponent', () => {
  let component: ItemDetailOverlayComponent;
  let fixture: ComponentFixture<ItemDetailOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDetailOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDetailOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
