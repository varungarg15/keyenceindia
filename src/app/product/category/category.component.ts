import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products=[1,2,3,45,5,7,8,9,0,6];
  constructor(private router:Router) { }
 
  ngOnInit() {
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
  
  singleProduct(){
   this.router.navigate(['/product-detail',1])
  }

  addCart(){
   
  }

}
