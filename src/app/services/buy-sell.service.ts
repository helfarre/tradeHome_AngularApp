import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Operation, Stock } from '../models/Operation.Model';
import { Observable } from 'rxjs';
import { Purchase } from '../models/Purchase.Model';
import { DashboardService } from './dashboard.service';
import { DatageneratorService } from './datagenerator.service';

@Injectable({
  providedIn: 'root'
})
export class BuySellService {

  constructor(private _http: HttpClient,private router : Router,
    private dashService : DashboardService,
    private dataService : DatageneratorService) {  }


  baseUrl :string= "https://trade-home-rest-api.herokuapp.com/";
  Buy(operation : Operation) : Observable<any>  
  {  
      let url = this.baseUrl + "Operation/addOperation/";
      return this._http.post(url+localStorage.getItem("id"),operation);  
  }  

  makePurchase(purchase : Purchase) : Observable<any>  
  {  
      let url = this.baseUrl + "Purchase/addpurchase/";
      return this._http.post(url+localStorage.getItem("id"),purchase);  
  }  
  sellPurchase(purchase : Purchase) : Observable<any>  
  {  
      let url = this.baseUrl + "Purchase/sellPurchase/";
      return this._http.post(url+localStorage.getItem("id"),purchase);  
  }  

  // method to get the stocks we purchased only to display int the sell page
  getPurchasedStocks() : Array<Stock>
  {  
    let stocks : Array<Stock> = new Array<Stock>();
        // first we get all the pruchases from dashboard service
      this.dashService.getAllPurchases().subscribe(response =>{
        for (let i of response){
          // Then we fill the missing information from the dataService service and we push it to the stocks array
          stocks.push(this.dataService.fillStocksPrice2(i.stock));
        }
        return stocks;
      });
      return stocks;
  }  
  getPurchaseByStock(Symbol : string) : Observable<Purchase>
  {  
    let url = this.baseUrl + "Purchase/stock/";
    localStorage.getItem('id');  
    return this._http.get<Purchase>(url+localStorage.getItem('id')+"/"+Symbol);  

  }  

  
}
