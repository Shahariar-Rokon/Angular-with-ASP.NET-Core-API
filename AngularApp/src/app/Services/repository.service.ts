import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Productcategory } from '../Models/productcategory';
import { Product } from '../Models/product';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http:HttpClient) { }
  private selectedProduct: Product | null = null;
  baseUrl='https://localhost:7115/'
  getAllProducts():Observable<Productcategory[]>{
    return this.http.get<Productcategory[]>(this.baseUrl+'ProductCategories')
  }
  postProduct(category:Productcategory):Observable<Productcategory>{
return this.http.post<Productcategory>(this.baseUrl+'ProductCategories',category)
  }
  deleteProduct(productId: number) {
    return this.http.delete<any>(this.baseUrl + 'ProductCategories/'+productId);
  }
  setSelectedCity(product: Product) {
    this.selectedProduct = product;
  }
  getSelectedCity(): Product | null {
    return this.selectedProduct;
  }
  getCategory(categoryId: number){
    return this.http.get<Productcategory>(this.baseUrl + 'ProductCategories/'+categoryId);
  }
  updateProductCategory(categoryId: number,category: Productcategory): Observable<Productcategory> {
    return this.http.put<Productcategory>(this.baseUrl+'ProductCategories/'+categoryId,category);
  }

  deleteProductandCategory(categoryId: number) {
    return this.http.delete<any>(this.baseUrl + 'ProductCategories/'+categoryId);
  }

}
