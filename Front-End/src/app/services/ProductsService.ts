import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ProductDetails } from '../models/ProductDetails';
import { SuccessfulResponseAddingProduct } from '../models/SuccessfulResponseAddingProduct';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  public listOfCategoryID = new BehaviorSubject(0);
  productListOfGivenCategoryID = this.listOfCategoryID.asObservable();

  constructor(private http: HttpClient) { }

  public findProductCategoryID(productListOfGivenCategoryID: any) {
    this.listOfCategoryID.next(productListOfGivenCategoryID);
  }

  public getTheNumberOfProductsLeftInStock(): Observable<any> {
    return this.http.get<any>('http://localhost:3001/products/getTheNumberOfProductsLeftInStock');
  }

  public getAllProducts(): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>('http://localhost:3001/products/getAllProducts');
  }

  public addProduct(productToAddForm: FormData): Observable<SuccessfulResponseAddingProduct> {
    return this.http.post<SuccessfulResponseAddingProduct>('http://localhost:3001/products/addProduct', productToAddForm);
  }

  public updateProduct(productToAddForm: FormData): Observable<SuccessfulResponseAddingProduct> {
    return this.http.post<SuccessfulResponseAddingProduct>('http://localhost:3001/products/updateProduct', productToAddForm);
  }

  public searchProduct(productName: any): Observable<any> {
    let productNameObject = { productName: productName };
    return this.http.post<any>('http://localhost:3001/products/searchProduct', productNameObject);
  }
}