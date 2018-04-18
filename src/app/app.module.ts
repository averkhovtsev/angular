import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductModule} from "./product/product.module";
import {CartModule} from "./cart/cart.module";
import {HeaderModule} from "./header/header.module";
import {ConfigOptionsService} from "./core/service/config-options.service";
import {CoreModule} from "./core/core.module";
import {CONSTANTS} from "./core/service/constants.service";
import {PathNotFoundComponent} from './shared/path-not-found/path-not-found.component';
import {LoginFormComponent} from './shared/login-form/login-form.component';
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,

    SharedModule,
    CoreModule,

    CartModule,
    HeaderModule,
    ProductModule,

    AppRoutingModule,
  ],
  providers: [
    ConfigOptionsService,
    {provide: CONSTANTS, useValue: {Application: "The Real Computer Shop", Version: "1.0"}}
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
