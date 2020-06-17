import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  isAuthenticated : boolean;
  page;
  totalRecords;
  operations : Array<any>;
  constructor(private _authService : AuthService
    ,private dashService : DashboardService
    ) { }

  ngOnInit(): void {
    this.isAuthenticated=this._authService.isLoggedIn();
    if(this.isAuthenticated)
    {
      this.dashService.getAllOperations().subscribe((response : any)=>{
        this.operations = response;
        this.operations = this.operations.reverse();

        
      });
     
    
    }
  }

}
