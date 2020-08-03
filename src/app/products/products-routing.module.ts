import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProductComponent } from './components/view-product/view-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { PreviewProductComponent } from './components/preview-product/preview-product.component';
import { ProductsComponent } from './products.component';


const routes: Routes = [

  {path:'',component:ProductsComponent,
  children:[
    {path:'add',component:AddProductComponent},
    {path:'edit',component:PreviewProductComponent},
    {path:'preview',component:ViewProductComponent},
  ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
