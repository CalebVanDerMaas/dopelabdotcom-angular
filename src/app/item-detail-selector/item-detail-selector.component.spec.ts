import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailSelectorComponent } from './item-detail-selector.component';

describe('ItemDetailSelectorComponent', () => {
  let component: ItemDetailSelectorComponent;
  let fixture: ComponentFixture<ItemDetailSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDetailSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDetailSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
