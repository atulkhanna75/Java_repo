import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'product-v2',
  templateUrl: './product-v2.component.html',
  styleUrls: ['./product-v2.component.css']
})
export class ProductV2Component {

  product!:Product;//= new Product("Nokia", 60000,"Nokia latest Angroid phone v13.0", "assets/images/NokiaPhone.png");

  i:number=0;

  //Demo getting data from the parent component
@Input('var1') messageFromParent!:string;

//Demo sharing data with the parent component
@Output() childEventWithSomeMessage = new EventEmitter<string>(); 

f3=()=> this.childEventWithSomeMessage.emit("Dear Parent, listen to me." + (this.i++) + "th, time.");


  str1:string="some string";

  f2=()=> console.log(this.messageFromParent);

  
  f=():void=> {
    console.log(`Called f() .. ${this.i++} times`);
    console.log(`str1  is  ${this.str1} `);
  }
}