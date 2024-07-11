import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ItemDetailOverlayComponent } from './item-detail-overlay/item-detail-overlay.component';
import { ItemDetailSelectorComponent } from './item-detail-selector/item-detail-selector.component';
import { ItemDetailPreviewComponent } from './item-detail-preview/item-detail-preview.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsPageComponent,
    ItemDetailOverlayComponent,
    ItemDetailSelectorComponent,
    ItemDetailPreviewComponent,
    SafeHtmlPipe,
    ShoppingCartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
