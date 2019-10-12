import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { RouterModule } from '@angular/router';
import { ShopingRoutingModule } from './shoping-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CoreModule } from '../core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ShoppingComponent,CartComponent,CheckoutComponent,ConfirmationComponent],
  imports: [
    CommonModule,
    ShopingRoutingModule,
    RouterModule,
    CoreModule,
    NgxPaginationModule
  ]
})
export class ShoppingModule { }
