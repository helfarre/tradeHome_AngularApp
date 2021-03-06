import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated : boolean;
  clientname : string ;
  tradeAuto : boolean;

  constructor(private authService : AuthService,private dashboardServie : DashboardService) { }

  ngOnInit(): void {
    this.isAuthenticated=this.authService.isLoggedIn();
    if(this.isAuthenticated)
    {
      this.authService.getAdminDetail().subscribe(response => {
          this.clientname=response.lname;
          this.tradeAuto= response.autoTrade;
      });
    }
  }
  Logout(){
    console.log("here")
    this.authService.Logout();
    window.location.reload();
  }
  
  switchStatus(){
  this.dashboardServie.changeAuto().subscribe(
    res=>{
        location.reload();
        this.tradeAuto=!this.tradeAuto;
    }
  )
  }


}
