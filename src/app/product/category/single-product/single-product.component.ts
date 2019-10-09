import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';
import { ShoppingCart } from 'src/app/Models/shopping-cart';
import { Product } from 'src/app/Models/product';
import { Subscription } from 'rxjs';
import { ProductService } from './../../../Service/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input() product;
  @Input() productId;
  key;
  cart:ShoppingCart;
  quantity
  subscription:Subscription;
  keySubscription:Subscription;
  constructor(private route:ActivatedRoute,private router:Router,
    public cartService:CartService,private productService:ProductService) { }
    
   async ngOnInit() {
   this.keySubscription= this.productService.getAll().snapshotChanges().
    subscribe(p=>{ this.key = p[this.productId].key
      // console.log(p[this.productId])
      })
     
     this.subscription = (await this.cartService.getCart()).valueChanges().subscribe(
       cart => {
         this.cart = cart;
         console.log(this.cart)
        //  console.log(this.cart.getQuantity(this.product));
        //  this.quantity=cart.getQuantity(this.product);
        // console.log( cart.totalItemsCount+ " "+cart.totalPrice)
        });

        // console.log(this.product)
  }

  getQuantity(product) {
    if (!this.cart) return null;
    if (this.cart && this.cart.items && this.key) {
      let item = this.cart.items[this.key]
      // console.log(this.cart.items[this.key]+' '+product.title)
      // console.log(this.cart.items[product.$key])
      return item ? item.quantity : null;
    }
  }
  
  singleProduct(){
    this.router.navigate(['/product-detail',this.productId])
   }

   addToCart(product){
    //  console.log(this.product)
    //  console.log(product)
    this.cartService.addToCart(product,this.key)
    // console.log(this.cart)
   }

   removeFromCart(product){
    //  console.log(product)
    this.cartService.removeFromCart(product,this.key)
    // console.log(this.cart)
   }

   ngOnDestroy(){
     this.subscription.unsubscribe();
     this.keySubscription.unsubscribe();
   }

  }


