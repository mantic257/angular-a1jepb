import { Injectable } from '@angular/core';

@Injectable(

    {providedIn: 'root'}
)
export class CartService {

  items = [];

  constructor() { }

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



}