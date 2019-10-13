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
  productId;

  
  cart:ShoppingCart;
  quantity
  keySubscription:Subscription;

  constructor(private route:ActivatedRoute,private router:Router,
               public cartService:CartService,private productService:ProductService)
                { }
    
   async ngOnInit() {   
     

        // console.log(this.product)
  }

 
  
  singleProduct(){
    this.router.navigate(['/product-detail',this.product.key])
   }

   ngOnDestroy(){
   }

  }


