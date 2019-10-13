import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import 'rxjs/add/operator/take'; 
import { CartService } from 'src/app/Service/cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from 'src/app/Models/shopping-cart';
declare var $:any;
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  productId
  id
  product
  cart:ShoppingCart
  subscription:Subscription;

  constructor(private route:ActivatedRoute,private productService:ProductService,
    private cartService:CartService) {
      var best_product_slider = $('.best_product_slider');
      if (best_product_slider.length) {
        best_product_slider.owlCarousel({
          items: 4,
          loop: true,
          dots: false,
          autoplay: true,
          autoplayHoverPause: true,
          autoplayTimeout: 5000,
          nav: true,
          navText: ["next", "previous"],
          responsive: {
            0: {
              margin: 15,
              items: 1,
              nav: false
            },
            576: {
              margin: 15,
              items: 2,
              nav: false
            },
            768: {
              margin: 30,
              items: 3,
              nav: true
            },
            991: {
              margin: 30,
              items: 4,
              nav: true
            }
          }
        });
      }
     }

  async ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    
    this.productService.getAll().snapshotChanges().take(1).
    subscribe(p=>{ this.productId=p[this.id].key
      this.productService.get(p[this.id].key).valueChanges()
      .subscribe(p=>{this.product=p
    console.log(this.product)})})

    this.subscription = (await this.cartService.getCart()).valueChanges().subscribe(
      cart => {
        this.cart = cart;
        console.log(this.cart)
       //  console.log(this.cart.getQuantity(this.product));
       //  this.quantity=cart.getQuantity(this.product);
       // console.log( cart.totalItemsCount+ " "+cart.totalPrice)
       });

     }

  

  getQuantity(product) {
    if (!this.cart) return null;
    if (this.cart && this.cart.items && this.productId) {
      let item = this.cart.items[this.productId]
      // console.log(this.cart.items[this.key]+' '+product.title)
      // console.log(this.cart.items[product.$key])
      return item ? item.quantity : null;
    }
  }

  addToCart(){
    //  console.log(this.product)
      console.log(this.product+' '+this.productId)
    this.cartService.addToCart(this.product,this.productId)
    // console.log(this.cart)
   }

   removeFromCart(){
    //  console.log(product)
    this.cartService.removeFromCart(this.product,this.productId)
    // console.log(this.cart)
   }

   ngOnDestroy(){
     this.subscription.unsubscribe();
   }

}
