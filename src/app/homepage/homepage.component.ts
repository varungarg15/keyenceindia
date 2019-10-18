import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from './../Service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
declare var $:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {
  
  products;
  subscription:Subscription
  keys: any;
  
  constructor(private productService:ProductService, private router:Router, private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.subscription= this.productService.getAll().snapshotChanges()
    .switchMap(keys => {
      this.keys=keys
      return this.productService.getAll().valueChanges();
    })
    .subscribe(products => {
       for(let p in products){
         products[p]['key']=this.keys[p].key
       }
       this.products = products
    })

    var product_list_slider = $('.product_list_slider');
    if (product_list_slider.length) {
      product_list_slider.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ["previous", "next"],
        smartSpeed: 1000,
        responsive: {
          0: {
            margin: 15,
            nav: false,
            items: 1
          },
          600: {
            margin: 15,
            items: 1,
            nav: false
          },
          768: {
            margin: 30,
            nav: true,
            items: 1
          }
        }
      });
    }

    $('.banner_slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
      function pad2(number) {
        return (number < 10 ? '0' : '') + number
      }
      var carousel = e.relatedTarget;
      $('.slider-counter').text(pad2(carousel.current()));
  
    }).owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          nav: false
        },
        600: {
          nav: false
        },
        768: {
          nav: true
        }
      }
    });
    
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

  trackByFn(index, item) {
    return index;
  }

}
