import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl:string="/home/atulkhanna75yah/Desktop/categories";

  constructor(public http:HttpClient) { }

  loadAllCategoryDetails():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl);
      }
  storeCategory(category:any): Observable<any>{
    return this.http.post(this.baseUrl, category);
  }
  deleteCategory(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id);
      }
  updateCategory(id:any):Observable<any>{
    return this.http.put(this.baseUrl+"/"+id, Category);
  }
}
