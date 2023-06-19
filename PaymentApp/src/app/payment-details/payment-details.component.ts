import { Component } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent {

  constructor(public service: PaymentDetailService,
    private toastr: ToastrService){}

  ngOnInit() : void{
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail){
     this.service.paymentDetailFormData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number){
    if(confirm('Are you sure you want to delete?')){
      this.service.deletePaymentDetail(id).subscribe(
        res => {
          this.service.refreshList();
          this.toastr.error('Deleted successfully', 'Payment Detail Register');
        },
        err => { 
          console.log(err);
          this.toastr.error('Error occurred', 'Payment Detail Register');
        }
      );
    }
  }
}
