import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { LoginCredentils } from "../models/LoginCredentials.Model";
import { refreshtoken } from "../models/RefreshTokenRequest.model";
import { tap } from "rxjs/operators";
import { User } from "../models/User.Model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient,private router : Router) { }
  baseUrl :string= "https://trade-home-rest-api.herokuapp.com/";
  login(clientDetail : LoginCredentils) : Observable<any>  
  {  
      let url = this.baseUrl + "authenticate";
      return this._http.post(url, clientDetail,{observe: 'response'});  
  }  
  refreshToken() {
    let refresh : refreshtoken = new refreshtoken();
    refresh.refreshToken= localStorage.getItem("RefreshToken");  
    refresh.userId= localStorage.getItem("id");  
      return this._http.post<any>(this.baseUrl+'renew', refresh
      ).pipe(tap((tokens) => {
        console.log("test");
        console.log(tokens.refreshToken)
        if(tokens.refreshToken !=undefined){
            localStorage.setItem("token" , tokens.refreshToken);
          }
          else{
            this.Logout();
          }
          location.reload();  
    }));
  }
 
Logout()
{
  // Remove the token from the localStorage.
  console.log("called1")
  let iduser = localStorage.getItem("id");  
  let url = this.baseUrl + "logoutcl/";
  this._http.get(url+iduser).subscribe(res=>{
    console.log("called1")
    console.log(res);
    // window.location.reload();
  })

  window.localStorage.clear();
  //this.router.navigate(['login']);
}
isLoggedIn() {


  // get the token from the localStorage as we have to work on this token.
  let token = localStorage.getItem('token');
  // check whether if token have something or it is null.
  if(!token)
  {
    return false;
  }
  else
  return true;
  // else
  // {
  //  // let expirationDate = jwtHelper.getTokenExpirationDate(token);

  //   // check whether the token is expired or not by calling isTokenExpired() method of JwtHelper class.
  //   let isExpired = jwtHelper.isTokenExpired(token);
  //   console.log("is expired")
  //   console.log(isExpired)
    
  //   return !isExpired;
  // }
  // }
}
  getAdminDetail() : Observable<User>  
  {  
      let url = this.baseUrl + "User/" + localStorage.getItem("id");  
  
       // create an instance of Header object.  
      let headers = new HttpHeaders();  
  
      // get token from localStorage.  
      let token = localStorage.getItem('token');  
  
      // Append Authorization header.  
      headers.append('Authorization' , 'Bearer ' + token);  
  
      return this._http.get<User>(url , { headers : headers });  
  }  
}
