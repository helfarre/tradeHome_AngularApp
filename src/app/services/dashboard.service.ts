import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operation } from '../models/Operation.Model';
import { Purchase } from '../models/Purchase.Model';
import { User } from '../models/User.Model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl :string= "https://trade-home-rest-api.herokuapp.com/";
  
  constructor( private httpClient: HttpClient) { }

  getAllOperations() : Observable <Operation>{
  let url = this.baseUrl + "Operation/Client/" + localStorage.getItem("id");  
  
   return this.httpClient.get<Operation>(url ); 
  }

  getAllPurchases(): Observable <Array<Purchase>>{
    let url = this.baseUrl + "Purchase/Client/" + localStorage.getItem("id");  
   return this.httpClient.get<Array<Purchase>>(url ); 
  }
  getUserbalance(){
    let url = this.baseUrl + "User/" + localStorage.getItem("id");  
  
   return this.httpClient.get<User>(url );
  }
  changeAuto(){
    let url = this.baseUrl + "User/changeAutoStatus/" + localStorage.getItem("id");  
   return this.httpClient.put(url,null);
  }


  
}

