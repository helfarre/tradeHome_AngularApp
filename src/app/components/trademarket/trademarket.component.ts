import { Component, OnInit } from '@angular/core';
import { MarketService } from 'src/app/services/market.service';
import { Stock } from 'src/app/models/Operation.Model';
import { DatageneratorService } from 'src/app/services/datagenerator.service';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-trademarket',
  templateUrl: './trademarket.component.html',
  styleUrls: ['./trademarket.component.css']
})
export class TrademarketComponent implements OnInit {
  isAuthenticated : boolean;
  name : string;
  stocks : Stock;
  Stocks : Array<Stock> = new Array();
  actualroute: string;
  constructor(private _authService : AuthService,
    private marketService : MarketService
    ,
    private dataService : DatageneratorService,
    private route: ActivatedRoute,loc: Location) {
      this.route.params.subscribe(params => {
        if(localStorage.getItem("categorie") != this.route.snapshot.paramMap.get("categorie") ){
        localStorage.setItem("categorie",this.route.snapshot.paramMap.get("categorie"));
        location.reload();
      }
     } );
    }
     

  ngOnInit(): void {
    this.isAuthenticated=this._authService.isLoggedIn();
   
      this.marketService.getStockbyCategory().subscribe(response=>{
        this.stocks = response;
      });
    this.marketService.getStocksByCategory(this.route.snapshot.paramMap.get("categorie")).subscribe(
      response=>{
            // response =>{
            //   Stocks = response;
            //   console.log(Stocks);
              for (let i of response){
                i = this.dataService.fillStocksPrice2(i);
                this.Stocks.push(i);
              }
              
      }
    );


  console.log(this.Stocks);
 
  }


}
