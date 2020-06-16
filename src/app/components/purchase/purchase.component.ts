import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Purchase } from 'src/app/models/Purchase.Model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  isAuthenticated : any;
  purchases : Array<Purchase>;
  page;
  totalRecords;
  
  constructor(private _authService : AuthService,
   private dashService : DashboardService,
   private _router : Router) { }


   
  ngOnInit(): void {
    
   if(!this._authService.isLoggedIn()){
    this._router.navigate(['/login']); 
  }
    else {
    this.isAuthenticated=this._authService.isLoggedIn();
    // if(this.isAuthenticated)
    // {
      this.dashService.getAllPurchases().subscribe(response=>{
        this.purchases = response;
      });
    }
  // }

  }
}
