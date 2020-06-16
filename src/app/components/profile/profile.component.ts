import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // client$ : Observable<Client>;
  operations : any
  constructor(//private _clientService : ClientDataService
     private _authSerivce : AuthenticationService
    ,private _router :Router
    
    ) {
    //  this.operations=[`this.httpClient.get()`]
     }

  ngOnInit(): void {
    // if(!this._authSerivce.isLoggedIn()){
    //   this._router.navigate(['/login']); 
    // }
    // else{
      
    //  // this.client$ = this._clientService.getClient(); 
    // }
  }

}
