import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from '../models/ProductDetails';
import { SuccessfulResponseAddingProduct } from '../models/SuccessfulResponseAddingProduct';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http: HttpClient) { }

  public getUserStoreActivity(userDetails: any): Observable<any> {
    return this.http.post<any>('http://localhost:3001/carts/getUserStoreActivity', userDetails);
  }

  public getUserCartItems(userDetails): Observable<any> {
    return this.http.post<ProductDetails[]>('http://localhost:3001/carts/getUserCartItems', userDetails);
  }

  public updateUserCartDetails(userDetails: any): Observable<any> {
    return this.http.post<any>('http://localhost:3001/carts/updateUserCartDetails', userDetails);
  }

  public updateProductOnCartItems(productDetails): Observable<SuccessfulResponseAddingProduct> {
    return this.http.post<SuccessfulResponseAddingProduct>('http://localhost:3001/carts/updateProductOnCartItems', productDetails);
  }

  public removeProductFromCartItem(productCartInfo): Observable<SuccessfulResponseAddingProduct> {
    return this.http.post<SuccessfulResponseAddingProduct>('http://localhost:3001/carts/removeProductFromCartItem', productCartInfo);
  }

  public deleteMyCartFromDB(cartInfo): Observable<SuccessfulResponseAddingProduct> {
    return this.http.post<SuccessfulResponseAddingProduct>('http://localhost:3001/carts/deleteMyCartFromDB', cartInfo);
  }

  public addOrUpdateProductToCart(productDetails: any): Observable<SuccessfulResponseAddingProduct> {
    return this.http.post<SuccessfulResponseAddingProduct>('http://localhost:3001/carts/addOrUpdateProductToCart', productDetails);
  }

  public getItemFromServerToDisplay(item: any): Observable<any> {
    return this.http.post<any>('http://localhost:3001/carts/getItemFromServerToDisplay', item);
  }
}
