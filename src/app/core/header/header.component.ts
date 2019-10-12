import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { CartService } from './../../Service/cart.service';
import { async } from '@angular/core/testing';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService, private cartService:CartService) { }
  cart
 async ngOnInit() { 
    console.log(this.auth.isLoggedIn());

    (await this.cartService.getCart()).valueChanges().subscribe(p=>{
      this.cart=p;
      console.log(this.totalCount())
      // console.log(p.items);
    })

    $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  })

}

totalCount() {
  if (!this.cart) return 0;
  let count = 0;
  for (let listingid in this.cart.items) {
    count += this.cart.items[listingid].quantity;
  }
  return this.cart.items ? count : 0;
}

logout(){
  this.auth.logout()
}

}
