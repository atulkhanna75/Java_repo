import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products:Product[] = [];

  constructor(){
  //   this.products[0] = new Product("Nokia", 6100,"Nokia latest Angroid phone v13.0", "assets/images/NokiaPhone.png");
  //   this.products[1] = new Product("Samsung", 6000,"Samsung latest Angroid phone v13.0", "assets/images/sam.png");
  //   this.products[2] = new Product("Lenova", 5600,"Lenova latest Angroid phone v13.0", "assets/images/leno.png");
  //   this.products[3] = new Product("Motorola", 70000,"Motorola latest Angroid phone v13.0", "assets/images/moto.png");
  // 
}

}
