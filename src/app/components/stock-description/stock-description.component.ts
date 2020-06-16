import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { MarketService } from 'src/app/services/market.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatageneratorService } from 'src/app/services/datagenerator.service';
import { Stock } from 'src/app/models/Operation.Model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stock-description',
  templateUrl: './stock-description.component.html',
  styleUrls: ['./stock-description.component.css']
})
export class StockDescriptionComponent implements OnInit {
  
  isAuthenticated : boolean;
  name : string;
  @Input() stock : Stock;
  actualroute: string;
  constructor(private _authService : AuthenticationService,
    private marketService : MarketService
    ,private _router :Router,
    private dataService : DatageneratorService,
    private route: ActivatedRoute, loc : Location) { }

  ngOnInit(): void {

     }

  

}
