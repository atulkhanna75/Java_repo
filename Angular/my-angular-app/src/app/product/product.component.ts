import { Component } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  name:string = "Samsung";
  price:number=10006;

  i:number=0;

  /// controller code

  f1 = ():string=> {
    alert( "Hello World 1" + this.i ) ;
    this.i=this.i+1;
    return "Hi";
  }

  f2 = ():void=> {
    alert( "Hello World 2 " + this.i ) ;
    this.i=this.i+1;   
  }
   

}