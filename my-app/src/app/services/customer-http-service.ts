import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../classes/ICustomer';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerHttpService {
    private _url:string="/assets/data/customers.json"; 
constructor(private _http: HttpClient) { } 
getCustomers():Observable<ICustomer[]>{     
return this._http.get<ICustomer[]>(this._url) 
} 
}
