import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import 'rxjs/add/operator/take'; 
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
  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {

    this.id= this.route.snapshot.paramMap.get('id');
    
    this.productService.getAll().snapshotChanges().take(1).
    subscribe(p=>{
      this.productService.get(p[this.id].key).valueChanges()
      .subscribe(p=>{this.product=p
    console.log(this.product)})})
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

}
