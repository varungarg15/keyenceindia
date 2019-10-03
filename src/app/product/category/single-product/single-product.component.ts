import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input() product;
  
  productId

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
        console.log(this.product+''+this.productId)
  }

}
