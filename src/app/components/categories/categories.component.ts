import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/Services/authentication.service';
import { MarketService } from 'src/app/services/market.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/Purchase.Model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  isAuthenticated : boolean;
  categories : Category;
  value : any;
  categorie : string;
  constructor(private _authService : AuthenticationService,
    private marketService : MarketService,private _router :Router,
    private route: ActivatedRoute)  { 
      
    }
    
  ngOnInit(): void {
    this.isAuthenticated=this._authService.isLoggedIn();

      this.marketService.getCategories().subscribe(response=>{
        this.categories = response;
      });

  }
 } 


