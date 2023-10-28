import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductV2Service } from "../services/product-v2.service";

@Component({
  selector:'add-product',
  templateUrl:'add-product.component.html',
  styleUrls:['./add-product.component.css']
})
export class AddProductComponent{
  productForm!:FormGroup;
  
}