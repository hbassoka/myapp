import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ViewProductComponent } from './components/view-product/view-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { PreviewProductComponent } from './components/preview-product/preview-product.component';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [ViewProductComponent, AddProductComponent, PreviewProductComponent, ProductsComponent],
  exports:[ViewProductComponent, AddProductComponent, PreviewProductComponent, ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
