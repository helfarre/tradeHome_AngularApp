import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  

  constructor(private httpClient : HttpClient) { }

  getStockBySymbol(symbol : string)  {

      return this.httpClient.get("https://prediction-web-service.herokuapp.com/predict/"+symbol);
  
}
}
