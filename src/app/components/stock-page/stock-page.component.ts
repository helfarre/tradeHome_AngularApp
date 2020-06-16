import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Stock } from 'src/app/models/Operation.Model';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { MarketService } from 'src/app/services/market.service';
import { DatageneratorService } from 'src/app/services/datagenerator.service';
import { Location } from '@angular/common';
import { PredictionService } from 'src/app/services/prediction.service';
import { predictions } from 'src/app/models/Predictions.Model';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.css']
})
export class StockPageComponent implements OnInit {
  stock_symbol : string;
  isAuthenticated : boolean;
  name : string;
  stock : Stock;
  actualroute: string;
  indicator : number = 1;
  values : Array<predictions>;
  text : string = "SHOW PREDICTIONS";
  constructor(private _authService : AuthenticationService,
    private marketService : MarketService
    ,private _router :Router,
    private dataService : DatageneratorService,
    private route: ActivatedRoute, loc : Location,
    private predictionService : PredictionService) { }

  ngOnInit(): void {
    this.stock_symbol=this.route.snapshot.paramMap.get("stockname");
    this.stock= new Stock();
    this.stock.symbol=this.stock_symbol;
    this.isAuthenticated=this._authService.isLoggedIn();
    // if(this.isAuthenticated)
    // {
    this.marketService.getStockBySymbol(this.stock_symbol).subscribe(
      response=>{

        console.log(this.stock);

              this.stock.id = response.id;
              this.stock.name = response.name;
              this.stock.category = response.category;
              this.stock = this.dataService.fillStocksPrice2(this.stock);     
      }
    );
  }
  // }
  changeindicator(value : number){
    if (value == 0){
      this.indicator=0;
    }
    else
      this.indicator = 1;
  }
  getPredictions(){
    var j=1;
    this.text="CALCULATING PREDICTIONS ...";
    this.predictionService.getStockBySymbol(this.stock_symbol).subscribe(res=>{
          let today = new Date()
          let tomorrow = new Date(today)
          this.values= new Array<predictions>();
          let i =0;
          while ( i< 5){
          let d : predictions= new predictions();
          tomorrow.setDate(new Date().getDate() + j);
          d.date= new Date();
          d.date.setDate(new Date().getDate() + j);
          console.log(d.date);
          console.log(d.date.getDay());
          j++;
          if (d.date.getDay() == 6 || d.date.getDay() == 0){
          if(i == 0){
            d.values=res['todayPrice'];
          } 
          else{
            d.values=res['predictions'][i-1];
          }
          }
          else{
            d.values=res['predictions'][i];
            i++;
          }
          this.values.push(d);
        }
        console.log(this.values);
        this.text="SHOW PREDICTIONS";
        this.indicator=2;

})
    
  }

}
