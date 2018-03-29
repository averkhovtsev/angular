import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';

import {ProductItemComponent} from './product-item/product-item.component';
import {ProductService} from './product.service';
import {ProductListComponent} from "./product-list/product-list.component";
import {HeaderModule} from "../header/header.module";
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule, FormsModule, HeaderModule, CoreModule
  ],
  declarations: [ProductListComponent, ProductItemComponent],
  providers: [ProductService],
  exports: [ProductListComponent]
})
export class ProductModule {
}
