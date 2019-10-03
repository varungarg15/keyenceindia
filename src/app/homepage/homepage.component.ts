import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  products=[1,2,3,4,5,6,7,8]

  cars=[1,23,4,5]
  constructor() { }
  
  ngOnInit() {
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
        navText: ["next", "previous"],
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
      navText: ["next", "previous"],
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

}
