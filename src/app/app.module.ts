import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicDealsComponent } from './deals/public-deals.component';
import { PrivateDealsComponent } from './deals/private-deals.component';
import { DealsService } from "app/deals/deals.service";

@NgModule({
  declarations: [
    AppComponent,
    PublicDealsComponent,
    PrivateDealsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DealsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
