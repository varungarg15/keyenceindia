import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { OrderService } from './../../Service/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  order;
  constructor(private cartService:CartService,private orderService:OrderService) { }

  async ngOnInit() {
    (await this.cartService.getCart()).valueChanges().subscribe(p=>{
     this.order = p.items
    })
  }

}
