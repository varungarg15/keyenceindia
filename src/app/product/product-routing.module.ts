import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


export const routes: Routes = [
  {path:'category',component:CategoryComponent},
  {path:'product-detail/:id',component:ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
