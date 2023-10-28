import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  category:Array<Category> =[];
  constructor(public categoryService:CategoryService){}

  buttonName:string='Store Category';
  categoryRef=new FormGroup({
    id: new FormControl(),
    categoryName: new FormControl(),
  categoryDescription: new FormControl(),
  categoryImageUrl: new FormControl(),
  });
  ngOnInit(): void {
      this.loadAllCategoryInfo();
  }

  storeCategory():void{
    let category=this.categoryRef.value;
      
    if(this.buttonName=="Update Category"){
      this.categoryService.updateCategory(category).subscribe({
      next:(data:any)=>{
        console.log(data);
      },
      error:(error:any)=>{
        console.log(error);
      },
    complete:()=>{
      console.log("category information stored");
      this.loadAllCategoryInfo();
      this.buttonName="Store category";
    }
  })
}else{
  this.categoryService.storeCategory(category).subscribe({
    next:(data:any)=>{
      console.log(data);
    },
  error:(error:any)=>{
      console.log(error);
    },
  complete:()=>{
    console.log("category information stored");
    this.loadAllCategoryInfo();
      }
  })
}
this.categoryRef.reset();
}
loadAllCategoryInfo():void{
  this.categoryService.loadAllCategoryDetails().subscribe({
    next:(data:any)=>{
      this.category=data;
      },
     error:(error: any)=>{
       console.log(error);
     },
     complete:()=>{
       console.log("Loaded all category data");
     }
  });
}
  deleteCategory(id:any):void{
    this.categoryService.deleteCategory(id).subscribe({
      next:(data:any)=>{
        console.log(data);
      },
      error:(error:any)=>{
        console.log(error);
      },
      complete:()=>{
        this.loadAllCategoryInfo();
      }
      });
     }  
updateCategory(category:any):void{
  this.categoryRef.get("id")?.setValue(category.id);
  this.categoryRef.get("categoryName")?.setValue(category.categoryName);
  this.categoryRef.get("categoryDescription")?.setValue(category.categoryDescription);
  this.categoryRef.get("categoryImageUrl")?.setValue(category.categoryImageUrl);

  this.buttonName="Update Category";
    }
  }

