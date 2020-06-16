import { Component, OnInit, Input } from '@angular/core';
import { Stock, Operation } from 'src/app/models/Operation.Model';
import { Purchase } from 'src/app/models/Purchase.Model';
import { DashboardService } from 'src/app/services/dashboard.service';
import { BuySellService } from 'src/app/services/buy-sell.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-sell',
  templateUrl: './stock-sell.component.html',
  styleUrls: ['./stock-sell.component.css']
})
export class StockSellComponent implements OnInit {

  @Input() stock : Stock;
  operation : Operation;
  purchase : Purchase;
  amount : number=0;
  unit : number =0;
  max : number = 0;
  constructor( private dashservice : DashboardService, private opService : BuySellService,private _router :Router) { }
  ngOnInit(): void {
    this.operation=new Operation();
    this.purchase=new Purchase();
    console.log(this.stock.symbol);
     this.opService.getPurchaseByStock(this.stock.symbol).subscribe(response =>
      {
        console.log("proooooblem");
        this.max=response.quantity;
      },err => {
        console.log("proooooblem");
          this._router.navigate['/sell'];
    });
  }
  plus(){
    if(this.unit<=(this.max-(this.max/10))){
   this.unit=(Number)(this.unit)+(this.max/10);
   this.amount=this.unit*this.stock.Close;
  }
  }
  minus(){
    if(this.unit> (this.max/10) ){
      this.unit=(Number)(this.unit)-(this.max/10);
      this.amount=this.unit*this.stock.Close;
    }
  }

  refreshunit(){
    if(this.unit<0)
    this.unit=0;
    else if (this.unit > this.max){
      this.unit=this.max;
    }
    this.amount=this.unit*this.stock.Close;
    
      
    }

    makeAction(){
      console.log(this.stock);
      this.operation.stock =this.stock;
      this.operation.date=new Date();
      this.operation.operationNature="SELL";
      this.operation.price=this.amount;
      this.operation.quantity=this.unit;
      this.purchase.stock=this.stock;
      this.purchase.quantity=this.unit;
      this.opService.Buy(this.operation).subscribe(response=> {
        this.max=this.max-this.operation.quantity;
        let  result = response.body;
        console.log(response.body);
        if(parseInt(result) != 0){
          console.log("good");
          this.opService.sellPurchase(this.purchase).subscribe(response=>{
            alert("purchase done");
            this._router.navigate(['/profile']);  
          })
        }  

      })

    }

}
