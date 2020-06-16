import { Component, OnInit, Input } from '@angular/core';
import { MarketService } from 'src/app/services/market.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatageneratorService } from 'src/app/services/datagenerator.service';
import { Stock } from 'src/app/models/Operation.Model';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/Services/auth.service';

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
  constructor() { }

  ngOnInit(): void {

     }

  

}
