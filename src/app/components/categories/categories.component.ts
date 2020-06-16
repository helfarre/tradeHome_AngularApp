import { Component, OnInit } from '@angular/core';

import { MarketService } from 'src/app/services/market.service';

import { Category } from 'src/app/models/Purchase.Model';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor(private _authService : AuthService,
    private marketService : MarketService
    )  { 
      
    }
    
  ngOnInit(): void {
    this.isAuthenticated=this._authService.isLoggedIn();

      this.marketService.getCategories().subscribe(response=>{
        this.categories = response;
      });

  }
 } 


