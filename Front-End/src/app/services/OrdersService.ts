import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuccessfullUserRegistrationFormStepTwoServerResponse } from '../models/SuccessfullUserRegistrationFormStepTwoServerResponse';
import { ShippingDetails } from '../models/ShippingDetails';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  public getTheTotalNumberOfSubmittedOrders(): Observable<any> {
    return this.http.get<any>('http://localhost:3001/orders/getTheTotalNumberOfSubmittedOrders');
  }

  public getCityNameFromServer(myCartDetails: any): Observable<SuccessfullUserRegistrationFormStepTwoServerResponse> {
    return this.http.post<SuccessfullUserRegistrationFormStepTwoServerResponse>('http://localhost:3001/orders/getCityNameFromServer', myCartDetails);
  }

  public getStreetNameFromServer(myCartDetails: any): Observable<SuccessfullUserRegistrationFormStepTwoServerResponse> {
    return this.http.post<SuccessfullUserRegistrationFormStepTwoServerResponse>('http://localhost:3001/orders/getStreetNameFromServer', myCartDetails);
  }

  public sameDateShipeDate(): Observable<any> {
    return this.http.get<any>('http://localhost:3001/orders/sameDateShipeDate');
  }

  public insertOrderInServer(shippingDetails: ShippingDetails): Observable<SuccessfullUserRegistrationFormStepTwoServerResponse> {
    return this.http.post<SuccessfullUserRegistrationFormStepTwoServerResponse>('http://localhost:3001/orders/insertOrderInServer', shippingDetails);
  }

  public createReceipt(orderDetails: any): Observable<any> {
    return this.http.post<any>('http://localhost:3001/orders/createReceipt', orderDetails);
  }
}