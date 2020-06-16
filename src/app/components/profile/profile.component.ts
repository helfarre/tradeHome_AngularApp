import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // client$ : Observable<Client>;
  operations : any
  constructor(
    
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
