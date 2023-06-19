import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent {
  constructor(public service: PaymentDetailService,
    private toastr: ToastrService){}

  onSubmit(form: NgForm){
    if(this.service.paymentDetailFormData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
      },
      err => { 
        console.log(err);
        this.toastr.error('Error occurred', 'Payment Detail Register');
      }
    );
  }

  updateRecord(form: NgForm){
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Payment Detail Register');
      },
      err => { 
        console.log(err);
        this.toastr.error('Error occurred', 'Payment Detail Register');
      }
    );
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.paymentDetailFormData = new PaymentDetail();
  }

}
