import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

}
