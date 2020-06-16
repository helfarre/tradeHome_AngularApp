import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponentComponent } from './components/homepage-component/homepage-component.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { StockListItemComponent } from './components/stock-list-item/stock-list-item.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HTTPListener } from './Inteceptors/HttpInterceptor2';
import { Interceptor } from './Inteceptors/HttpInterceptor';
import { AuthenticationService } from './Services/authentication.service';
import { OperationsComponent } from './components/operations/operations.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { BalanceComponent } from './components/balance/balance.component';
import { TrademarketComponent } from './components/trademarket/trademarket.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StockDescriptionComponent } from './components/stock-description/stock-description.component';
import { StockPageComponent } from './components/stock-page/stock-page.component';
import { StockBuyComponent } from './components/stock-buy/stock-buy.component';
import { SellStocksComponent } from './components/sell-stocks/sell-stocks.component';
import { StockSellPageComponent } from './components/stock-sell-page/stock-sell-page.component';
import { StockSellComponent } from './components/stock-sell/stock-sell.component';
import { PredictionsTableComponent } from './components/predictions-table/predictions-table.component';
import { RouteguardGuard } from './guards/routeguard.guard';
import { SignupComponent } from './components/signup/signup.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';;
import {MatFormFieldModule} from '@angular/material/form-field' ;
import { MatInputModule } from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponentComponent,
    BarChartComponent,
    StocksListComponent,
    StockListItemComponent,
    LoginComponent,
    ProfileComponent,
    OperationsComponent,
    PurchaseComponent,
    BalanceComponent,
    TrademarketComponent,
    CategoriesComponent,
    StockDescriptionComponent,
    StockPageComponent,
    StockBuyComponent,
    SellStocksComponent,
    StockSellPageComponent,
    StockSellComponent,
    PredictionsTableComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,MatCardModule,MatToolbarModule,MatMenuModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatCheckboxModule,
    MatAutocompleteModule,MatRadioModule,MatTableModule,MatSnackBarModule,MatTooltipModule,MatDialogModule,MatProgressBarModule,MatProgressSpinnerModule,MatButtonToggleModule,
    MatSelectModule,MatSliderModule,MatSidenavModule,MatStepperModule,MatChipsModule,MatPaginatorModule,MatSortModule,MatExpansionModule,MatSlideToggleModule,
    MatTabsModule,MatListModule,MatGridListModule,MatNativeDateModule,FormsModule,ReactiveFormsModule,HttpClientModule,NgxPaginationModule
    

  ],
  providers: [AuthenticationService,RouteguardGuard,{
    provide : HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass: HTTPListener,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
