import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input() product;
  @Input() productId;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
        // console.log(this.product)
  }

  singleProduct(){
    this.router.navigate(['/product-detail',this.productId])
   }

}
