import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  productId

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    
   this.productId= this.route.snapshot.paramMap.get('id');
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
