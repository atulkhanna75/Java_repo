import { Component, OnInit } from '@angular/core';
import { ProductV2Service } from '../services/product-v2.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';


@Component({
  selector: 'app-product-v5',
  templateUrl: './product-v5.component.html',
  styleUrls: ['./product-v5.component.css']
})
export class ProductV5Component implements OnInit{

  productId!: string;

  constructor(private productService: ProductV2Service,private route: ActivatedRoute) { }

  product!: Product;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId !== null) {
        this.productId = productId;
        
        // Now you can use this.productId to fetch it from the Service
        this.productService.getProduct(this.productId).subscribe(
          product => {
            this.product = product;
          },
          error => {
            console.error('Error fetching product:', error);
          }
        );
      }
    });
  }



}


}
