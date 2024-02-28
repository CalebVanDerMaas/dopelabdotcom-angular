import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ItemDetailOverlayComponent } from './item-detail-overlay/item-detail-overlay.component';
import { ItemDetailSelectorComponent } from './item-detail-selector/item-detail-selector.component';
import { ItemDetailPreviewComponent } from './item-detail-preview/item-detail-preview.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemsPageComponent,
    ItemDetailOverlayComponent,
    ItemDetailSelectorComponent,
    ItemDetailPreviewComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
