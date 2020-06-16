import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BarChartComponent} from './components/bar-chart/bar-chart.component'
import { HomepageComponentComponent } from './components/homepage-component/homepage-component.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OperationsComponent } from './components/operations/operations.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { TrademarketComponent } from './components/trademarket/trademarket.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StockPageComponent } from './components/stock-page/stock-page.component';
import { SellStocksComponent } from './components/sell-stocks/sell-stocks.component';
import { StockSellPageComponent } from './components/stock-sell-page/stock-sell-page.component';
import { RouteguardGuard } from './guards/routeguard.guard';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'bar-chart',component:BarChartComponent,canActivate:[RouteguardGuard]},
  {path : '' , component : HomepageComponentComponent},
  {path : 'SignUp' , component : SignupComponent},

  {path :'login',component : LoginComponent},
  {path :'profile',component : ProfileComponent,canActivate:[RouteguardGuard]},
  {path : 'operations' , component : OperationsComponent,canActivate:[RouteguardGuard]},
  {path : 'sell' , component : SellStocksComponent,canActivate:[RouteguardGuard]},
  {path : 'purchases' , component : PurchaseComponent,canActivate:[RouteguardGuard]},
  // {path : 'TradeMarket', component : TrademarketComponent},
  {path : 'stock/:stockname' , component : StockPageComponent,canActivate:[RouteguardGuard]},
  {path : 'stock/sell/:stockname' , component : StockSellPageComponent,canActivate:[RouteguardGuard]},

  {path : 'Categories' ,
   component : CategoriesComponent,canActivate:[RouteguardGuard],
   children : [
     {path : ':categorie', component : TrademarketComponent,canActivate:[RouteguardGuard]}
    //  {path :'' , redirectTo : 'TradeMarket', pathMatch : 'full'},
    //  {path : 'TradeMarket', component : TrademarketComponent}
   ]
  },
  {path : '**' , component : HomepageComponentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
