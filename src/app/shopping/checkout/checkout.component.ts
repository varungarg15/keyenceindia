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
  shipping={first_name:'',last_name:'',phone:'',country:'',zip:'',
            email:'',address:'',city:''};
  
  constructor(private cartService:CartService,private productService:ProductService,
      private router:Router,private orderService:OrderService,private authService:AuthService) { }

      async ngOnInit() {
        this.subscription= (await this.cartService.getCart()).valueChanges().subscribe(cart=>{
           if(cart){
           this.cart=cart.items
           this.objectKey= Object.keys(cart.items);
        }
         })
       }

       getTotalPrice(){
        let sum = 0;
        for (let productId in this.objectKey) 
        //  console.log(this.cart[this.objectKey[productId]])
           sum += this.cart[this.objectKey[productId]].product.price * this.cart[this.objectKey[productId]].quantity;
        return sum;
      }


       orders(){
        this.userId=localStorage.getItem('uid')
        let datePlaced = new Date().getTime();
        var order
       
         order = {
          userId:localStorage.getItem('uid'),
          datePlaced:datePlaced,
          shipping: this.shipping,
          items:{
            cart:this.cart,
            totalPrice:this.getTotalPrice()
          },
        };
       
          console.log(order)
          this.orderService.placeOrder(order);
        
        this.notification()
        this.router.navigate(['/order']);
        }

      notification(){
      let message =
       `You have recieved a new order from ${this.shipping.first_name} <br>`;
       message += `<b>Mobile</b> -  ${this.shipping.phone} <br>`;
       message += `<b>Email</b> - ${this.shipping.email} <br>`;
       message += `<b>Address</b> - ${this.shipping.address}, PIN - ${this.shipping.zip}<br>`;
       message += `<b>City</b> - ${this.shipping.city}<br>`
        
        let toAppend = '';
          if(this.cart){
          for (let productId in this.objectKey){
            toAppend+=`<b>S.No</b>     - ${productId+1}<br>`;
            toAppend+=`<b>Product</b>  - ${this.cart[this.objectKey[productId]]['product'].title}<br>`;
            toAppend+=`<b>Quantity</b> - ${this.cart[this.objectKey[productId]]['quantity']}<br>`
          }
        }
        message+=toAppend; 
        var notification={
         title:"You have recieved a new order",
         body:message,
         timestamp: new Date().getTime()
        }
        this.orderService.placedNotification(notification)
      }
               

    onSave(f){
      this.orders()
    }

}
