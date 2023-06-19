import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:7057/api/PaymentDetails'
  paymentDetailFormData: PaymentDetail = new PaymentDetail();
  listPaymentDetails: PaymentDetail[];

  postPaymentDetail(){
    return this.http.post(this.baseUrl, this.paymentDetailFormData);
  }

  putPaymentDetail(){
    return this.http.put(`${this.baseUrl}/${this.paymentDetailFormData.id}`, this.paymentDetailFormData);
  }

  deletePaymentDetail(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.listPaymentDetails = res as PaymentDetail[]);
  }
}
