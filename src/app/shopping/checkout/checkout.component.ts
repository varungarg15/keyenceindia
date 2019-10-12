import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { ProductService } from 'src/app/Service/product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/Models/order';
import { OrderService } from './../../Service/order.service';
import { AuthService } from './../../Service/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  subscription: Subscription;
  cart;
  objectKey;
  userId;
  shipping;

  constructor(private cartService:CartService,private productService:ProductService,
      private router:Router,private orderService:OrderService,private authService:AuthService) { }

      async ngOnInit() {
        this.subscription= (await this.cartService.getCart()).valueChanges().subscribe(cart=>{
           if(cart){
           this.cart=cart.items
           this.objectKey= Object.keys(cart.items);
           console.log(this.cart[this.objectKey[0]]['product'])
           console.log(cart)}
         })
       }

       getTotalPrice(){
        let sum = 0;
        for (let productId in this.objectKey) 
        //  console.log(this.cart[this.objectKey[productId]])
           sum += this.cart[this.objectKey[productId]].product.price * this.cart[this.objectKey[productId]].quantity;
        return sum;
      }

      async orders(){
        
        this.userId=localStorage.getItem('uid')
        let datePlaced = new Date().getTime();

        let order = {
          userId:this.userId,
          datePlaced:datePlaced,
          items:{
            cart:this.cart,
            totalPrice:this.getTotalPrice()
          }
        };
        console.log(order)
        let result = await this.orderService.placeOrder(order);
         console.log(result)
         this.router.navigate(['/order']);
      }



}
