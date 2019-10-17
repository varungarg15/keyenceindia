import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CoreModule } from '../core/core.module';
import { ProductRoutingModule } from './product-routing.module';
import { SingleProductComponent } from './category/single-product/single-product.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductComponent,CategoryComponent,ProductDetailComponent, SingleProductComponent],
  imports: [
  ProductRoutingModule,
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule,
    CoreModule,
    FormsModule,
    NgxPaginationModule
  ],schemas:[NO_ERRORS_SCHEMA],exports:[SingleProductComponent]
})
export class ProductModule { }
