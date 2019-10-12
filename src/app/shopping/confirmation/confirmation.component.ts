import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { OrderService } from './../../Service/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  orders;
  products=[];
  p;

  constructor(private cartService:CartService,private orderService:OrderService) { }
  async ngOnInit() {
  (await this.orderService.getOrdersByUser(localStorage.getItem('uid'))).valueChanges().subscribe(p=>{
    console.log(p)
    this.orders=p;
    for(let order in this.orders){
     this.products.push(Object.keys(this.orders[order].items.cart));
    }
   
    // console.log(this.products)
  })
  // console.log(this.orders)
  }

  trackByFn(index,item){
    return index;
  }

}
