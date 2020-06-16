import { Injectable } from '@angular/core';
import { Stock } from '../models/Operation.Model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DatageneratorService } from './datagenerator.service';
import { Category } from '../models/Purchase.Model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MarketService {
  baseUrl :string= "https://trade-home-rest-api.herokuapp.com/";
  constructor(private httpClient : HttpClient, private dataService : DatageneratorService) { }

  getStockbyCategory() : Observable <Stock>{
    let url = this.baseUrl + `Stock/Stocks/Media`;   
     return this.httpClient.get<Stock>(url); 
    }
  getCategories() : Observable <Category>{
    let url = this.baseUrl + "Category/Categories";
    return this.httpClient.get<Category>(url);
  }

  getStocksByCategory(category : string) : Observable<Array<Stock>> {
   let Stocks : Array<Stock> = new Array<Stock>();
    let url = this.baseUrl + `Stock/Stocks/`+category;
     return this.httpClient.get<Array<Stock>>(url);
  }

  getStockBySymbol(symbol : string) : Observable<Stock>  {
    let Stock : Stock;
     let url = this.baseUrl + `Stock/Stockname/`+symbol;
      return this.httpClient.get<Stock>(url);
  
}


}