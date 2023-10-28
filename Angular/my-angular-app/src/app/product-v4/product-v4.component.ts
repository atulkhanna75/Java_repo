import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import { ProductV2Service } from '../services/product-v2.service';

@Component({
  selector: 'product-v4',
  templateUrl: './product-v4.component.html',
  styleUrls: ['./product-v4.component.css']
})
export class ProductV4Component {

  product!: Product;
  
  @Input('productId') productId!: string;

  constructor(private productService: ProductV2Service) { }

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(
      product => {
        this.product = product;
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }
  

}