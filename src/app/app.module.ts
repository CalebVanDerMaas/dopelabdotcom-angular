import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ItemDetailOverlayComponent } from './item-detail-overlay/item-detail-overlay.component';
import { ItemDetailSelectorComponent } from './item-detail-selector/item-detail-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsPageComponent,
    ItemDetailOverlayComponent,
    ItemDetailSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
