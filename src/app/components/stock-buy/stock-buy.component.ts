import { Component, OnInit, Input } from '@angular/core';
import { Stock, Operation } from 'src/app/models/Operation.Model';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Purchase } from 'src/app/models/Purchase.Model';
import { BuySellService } from 'src/app/services/buy-sell.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-buy',
  templateUrl: './stock-buy.component.html',
  styleUrls: ['./stock-buy.component.css']
})
export class StockBuyComponent implements OnInit {
  @Input() stock : Stock;
  operation : Operation;
  purchase : Purchase;
  amount : number=0;
  unit : number =0;
  max : number = 0;
  constructor( private dashservice : DashboardService, private opService : BuySellService, private _router : Router) { }

  ngOnInit(): void {
    this.operation=new Operation();
    this.purchase=new Purchase();

      this.dashservice.getUserbalance().subscribe(response =>{
        this.max=response.balance;
      })
  }

  plus(){
    if(this.amount<=(this.max-10))
   this.amount=(Number)(this.amount)+10;
   this.unit=this.amount/this.stock.Close;
  }
  minus(){
    if(this.amount>25){
    this.amount=(Number)(this.amount)-10;
    this.unit=this.amount/this.stock.Close;
    }
  }
  refresh(){
    if(this.amount<0 )
      this.amount=0;
    if(this.amount>this.max)
    this.amount=this.max;
      this.unit=this.amount/this.stock.Close;
  }
  refreshunit(){
    if(this.unit<0)
    this.unit=0;
    this.amount=this.unit*this.stock.Close;
    if(this.amount>this.max)
    this.refresh();
    }

    makeAction(){
      console.log(this.stock);
      this.operation.stock=this.stock;
      this.operation.date=new Date();
      this.operation.operationNature="BUY";
      this.operation.price=this.amount;
      this.operation.quantity=this.unit;
      this.purchase.stock=this.stock;
      this.purchase.quantity=this.unit;
      this.purchase.stockPrice=this.stock.Close;
      this.opService.Buy(this.operation).subscribe(response=> {
        this.max=this.max-this.operation.price;
        let  result = response.body;
        console.log(response.body);
        if(parseInt(result) != 0){
          console.log("good");
          this.opService.makePurchase(this.purchase).subscribe(response=>{
            alert("purchase done");
            this._router.navigate(['/profile']);          
            })
        }  

      })

    }

}
