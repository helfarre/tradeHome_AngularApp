import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  isAuthenticated : boolean;
  clientbalance : number;
  firstname : string;
   constructor( private _authService: AuthenticationService,
    private dashService : DashboardService) { }

  ngOnInit(): void {
    this.isAuthenticated=this._authService.isLoggedIn();
    // if(this.isAuthenticated)
    // {
      this.dashService.getUserbalance().subscribe(response=>{
        this.firstname = response.fname;
        this.clientbalance = response.balance;
      });
  //  }

  }
}


