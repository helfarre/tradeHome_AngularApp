import { Component, OnInit } from '@angular/core';
import { BuySellService } from 'src/app/services/buy-sell.service';
import { Stock } from 'src/app/models/Operation.Model';

@Component({
  selector: 'app-sell-stocks',
  templateUrl: './sell-stocks.component.html',
  styleUrls: ['./sell-stocks.component.css']
})
export class SellStocksComponent implements OnInit {
  stocks : Array<Stock>;
  constructor(  private purchaseServ : BuySellService) { }

  ngOnInit(): void {
  
    // if(!this.authService.isLoggedIn())
    // {
    // }
    this.stocks = new Array<Stock>();
    this.stocks = this.purchaseServ.getPurchasedStocks();
    
   console.log(this.stocks); 
  }

}
