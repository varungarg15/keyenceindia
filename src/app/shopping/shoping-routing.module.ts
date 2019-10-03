import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


export const routes: Routes = [
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'confirmation',component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopingRoutingModule { }
