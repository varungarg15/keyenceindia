import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { CartService } from 'src/app/Service/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products=[1,2,3,4];
  cart;
  objectKey;
  subscription;
  constructor(private productService:ProductService,private cartService:CartService) { }

  async ngOnInit() {
  this.subscription= (await this.cartService.getCart()).valueChanges().subscribe(cart=>{
  if(cart){ 
  this.cart=cart.items
  this.objectKey= Object.keys(cart.items);
  console.log(this.cart[this.objectKey[0]]['product'])
  console.log(cart) }})
  }

  trackByFn(index,item){
    return index;
  }

  getQuantity(productId) {
    console.log(productId+' '+this.cart)
    if (!this.cart) return null;
    if (this.cart && this.cart.items) {
    let item = this.cart.items[productId]
      // console.log(this.cart.items[this.key]+' '+product.title)
      // console.log(this.cart.items[product.$key])
    console.log(item)
    return item ? item.quantity : null;
    }
  }

  getTotalPrice(){
    let sum = 0;
    for (let productId in this.objectKey) 
       sum += this.cart[this.objectKey[productId]].product.price * this.cart[this.objectKey[productId]].quantity;
    return sum;
  }

  addToCart(product,productId){
    //  console.log(this.product)
      console.log(product+' ')
    this.cartService.addToCart(product,productId)
    // console.log(this.cart)
   }

   removeFromCart(product,productId){
    //  console.log(product)
    this.cartService.removeFromCart(product,productId)
    // console.log(this.cart)
   }

   ngOnDestroy(){
     this.subscription.unsubscribe();
   }

  

}
