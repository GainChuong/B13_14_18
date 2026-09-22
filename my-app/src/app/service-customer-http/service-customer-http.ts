import { Component } from '@angular/core';
import { CustomerHttpService } from '../services/customer-http-service';

@Component({
  selector: 'app-service-customer-http',
  standalone: false,
  styleUrl: './service-customer-http.css',
  templateUrl: './service-customer-http.html',
})
export class ServiceCustomerHttp {
  customers:any; 
constructor(private _service: CustomerHttpService){ 
this._service.getCustomers().subscribe({ 
next:(data)=>{this.customers=data}  
}) 
} 
}
