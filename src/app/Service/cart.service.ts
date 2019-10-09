import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../Models/shopping-cart';
import { Product } from '../Models/product';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import 'rxjs/add/operator/take'; 
import 'rxjs/add/operator/map'; 
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private db: AngularFireDatabase) { }

  async delete(product:Product,key) {
    let cart_id = await this.getorcreateCartId();
    this.db.object('/shopping-cart/' + cart_id + '/items/' + key).remove()
  }

  async clearCart() {
    let cart_id = await this.getorcreateCartId();
    this.db.object('/shopping-cart/' + cart_id + '/items/').remove()
  }

  private create() {
    return this.db.list('/shopping-cart').push({
      DateCreated: new Date().getTime()
    })
  }

  totalCount(cart) {
    if (!cart) return 0;
    let count = 0;
    for (let listingid in cart.items) {
      count += cart.items[listingid].quantity;
    }
    return cart.items ? count : 0;
  }

  async removeFromCart(product,key) {
    let cart_id = await this.getorcreateCartId();
    let item$ = this.db.object('/shopping-cart/' + cart_id + '/items/' + key);
    item$.snapshotChanges().take(1).subscribe(item => {
      let quantity = (item.payload.exists() ? item.payload.val()['quantity'] : 0) - 1
      if (quantity === 0) item$.remove();
      else item$.update({
        product: product,
        quantity: quantity
      });
    });
  }

  async getCart(): Promise<AngularFireObject<ShoppingCart>> {
    let cart_id = await this.getorcreateCartId();
    return this.db.object('/shopping-cart/' + cart_id);
  }

  private async getorcreateCartId(): Promise<string> {
    let cart_id = localStorage.getItem('cart_id')
    if (cart_id) return cart_id;
    let result = await this.create();
    localStorage.setItem('cart_id', result.key);
    return result.key;
  }

  async addToCart(product,key) {
    let cart_id = await this.getorcreateCartId();
    let item$ = this.db.object('/shopping-cart/' + cart_id + '/items/' + key);
    console.log(key)
    item$.snapshotChanges().take(1).subscribe(item => {
      let quantity = (item.payload.exists() ? item.payload.val()['quantity'] : 0) + 1
      if (quantity === 0) item$.remove();
      else item$.update({
        product: product,
        quantity: quantity
      });
    });
  }
}
