import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[] = [];

  constructor(){
    // this.products[0] = new Product("Nokia", 6100,"Nokia latest Angroid phone v13.0", "assets/images/NokiaPhone.png");
    // this.products[1] = new Product("Samsung", 6000,"Samsung latest Angroid phone v13.0", "assets/images/sam.png");
    // this.products[2] = new Product("Lenova", 5600,"Lenova latest Angroid phone v13.0", "assets/images/leno.png");
    // this.products[3] = new Product("Motorola", 70000,"Motorola latest Angroid phone v13.0", "assets/images/moto.png");
  }

  getProduct(prodNum: number): Product {
    return this.products[prodNum];
  }

  getAllProduct(): Product[] {
    return this.products;
  }
}