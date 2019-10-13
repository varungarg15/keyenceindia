import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import { CartService } from './../../Service/cart.service';
declare var $:any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products;
  subscription;
  filteredProduct;
  categories;
  category;
  p= 1;
  keys;
  constructor(public productService:ProductService,
    private route:ActivatedRoute,private router:Router) {
  }

  ngOnInit() {
    this.subscription= this.productService.getAll().snapshotChanges()
    .switchMap(keys => {
      // console.log(products)
      this.keys=keys
    return this.productService.getAll().valueChanges();
    })
    .switchMap(products => {
       for(let p in products){
         products[p]['key']=this.keys[p].key
       }
       console.log(products)
       this.filteredProduct=products
      return this.route.queryParamMap
    }).subscribe(params=>{
      this.category = params.get('category'); 
      this.applyFilter();      
    })

  // this.subscription.subscribe(p=>{console.log(p)})
    this.getCategories()
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
  
  filter(query: string) {
    let q = query.toLowerCase();
    this.products = this.filteredProduct;
    this.products = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(q)) : this.filteredProduct;
    }

    clearQuery(){
      this.router.navigate(['/category'])
     }
  
  getCategories(){
  this.productService.getCategory().subscribe(p=>{this.categories=p});
  }

  trackByFn(index,item){
    return index;
  }

  private applyFilter() { 
    this.products = (this.category && this.filteredProduct) ? 
    this.filteredProduct.filter(p =>{
      console.log(p.category.toLowerCase() == this.category.toLowerCase())
      return p.category.toLowerCase() == this.category.toLowerCase()
      }) : 
    this.filteredProduct;
  }

}
