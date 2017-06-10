import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicDealsComponent } from './deals/public-deals.component';
import { PrivateDealsComponent } from './deals/private-deals.component';
import { DealsService } from "app/deals/deals.service";
import { routing } from "app/app.routes";
import { HttpModule } from "@angular/http";
import { CallbackComponent } from "app/authentication/callback.component";
import { AuthService } from "app/authentication/auth.service";
import { AuthHttp, AuthConfig } from "angular2-jwt/angular2-jwt";

@NgModule({
  declarations: [
    AppComponent,
    PublicDealsComponent,
    PrivateDealsComponent,
    CallbackComponent    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [DealsService, AuthService, AuthHttp, AuthConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
