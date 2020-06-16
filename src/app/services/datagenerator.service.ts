import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Stock } from '../models/Operation.Model';
import { isBuffer } from 'util';

@Injectable({
  providedIn: 'root'
})

export class DatageneratorService {

  API_KEY = 'bribfcvrh5rep8a5jang';
 
  constructor(private httpClient: HttpClient) { }
    public getData(stock:String, startingdate:Date,enddate:Date,resolution:String){
        startingdate=new Date(startingdate);
        enddate=new Date(enddate);
      let Start= (startingdate.getTime()/1000).toFixed(0);
      let Finish= (enddate.getTime()/1000).toFixed(0);
    return this.httpClient.get('https://prediction-web-service.herokuapp.com/getStockHistory/'+stock+'/'+Start+'/'+Finish+'/'+resolution);
  }
  public getDataprofile(stock:String, startingdate:Date,enddate:Date,resolution:String){
    startingdate=new Date(startingdate);
    enddate=new Date(enddate);
    let Start= (startingdate.getTime()/1000).toFixed(0);
    let Finish= (enddate.getTime()/1000).toFixed(0);
    return this.httpClient.get(`https://finnhub.io/api/v1/stock/candle?symbol=${stock}&resolution=${resolution}&from=${Start}&to=${Finish}&token=${this.API_KEY}`);
}
  public fillStocksPrice( stock : Stock) : Stock {
    let finishingDate=new Date();
    let finish= (finishingDate.getTime()/1000).toFixed(0);
    let startingdate=new Date();
    startingdate.setDate(startingdate.getDate() - 2);
    let Start= (startingdate.getTime()/1000).toFixed(0);
   // console.log("start"+Start+"finish"+finish);
    this.httpClient.get(`https://finnhub.io/api/v1/stock/candle?symbol=${stock.symbol}&resolution=D&from=${Start}&to=${finish}&token=${this.API_KEY}`).subscribe(
      (response : any )=>{
        if(response != undefined && response != null && response.length == 0){
        stock.Close=response['c'][response['c'].length-1];
        stock.Open=response['o'][response['o'].length-1];
        stock.High=response['h'][response['h'].length-1];
        stock.Low=response['l'][response['l'].length-1];
      }
      }
    );
    // console.log(stock);
    return stock;
  }

  public fillStocksPrice2( stock : Stock) : Stock {
    let finishingDate=new Date();
    let finish= (finishingDate.getTime()/1000).toFixed(0);
    let startingdate=new Date();
    startingdate.setDate(startingdate.getDate() - 2);
    let Start= (startingdate.getTime()/1000).toFixed(0);


   // console.log("start"+Start+"finish"+finish);
    this.httpClient.get('https://prediction-web-service.herokuapp.com/getStockHistory/'+stock.symbol+'/'+Start+'/'+finish+'/d').subscribe(
      (response : any )=>{
        if(response != undefined && response != null && response.length != 0){
        stock.Close=response['Close'][response['Close'].length-1][0].toFixed(2);
        stock.Open=response['Open'][response['Open'].length-1][0].toFixed(2);
        stock.High=response['High'][response['High'].length-1][0].toFixed(2);
        stock.Low=response['Low'][response['Low'].length-1][0].toFixed(2);
        }
      })    
    return stock;
  }

    
    

}
