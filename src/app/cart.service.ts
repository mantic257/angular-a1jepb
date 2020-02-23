import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(

    {providedIn: 'root'}
)
export class CartService {

  items = [];

  constructor(
  private httpClient: HttpClient

  ) { }

  getItems(){

    return this.items;
  }

  addToCart(product){
    this.items.push(product);
    /*alert('lenght: ' + this.items.length);*/
  }

  clearCart(){
    this.items=[];
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient.get('/assets/shipping.json');
  }



}