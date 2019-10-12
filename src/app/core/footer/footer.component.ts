import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../Service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  categories;
  subscription:Subscription;
  constructor(private productService:ProductService) { }

  ngOnInit() {
  this.subscription = this.productService.getCategory()
  .subscribe(p=>{this.categories=p})
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

}
