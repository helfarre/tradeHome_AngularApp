import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Operation } from 'src/app/models/Operation.Model';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  isAuthenticated : boolean;
  page;
  totalRecords;
  operations : any;
  constructor(private _authService : AuthenticationService
    ,private _router :Router
    ,private dashService : DashboardService
    ) { }

  ngOnInit(): void {
    this.isAuthenticated=this._authService.isLoggedIn();
    if(this.isAuthenticated)
    {
      this.dashService.getAllOperations().subscribe(response=>{
        this.operations = response;

        
      });
     
    
    }
  }

}
