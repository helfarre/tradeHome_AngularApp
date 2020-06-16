import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardGuard implements CanActivate {
  constructor(private codeservice:AuthService,private router:Router){}

  canActivate():boolean{
    if((this.codeservice.isLoggedIn())){
      console.log('tooooo')
        return true;
    }
    else{
      console.log('tee')
      this.router.navigate(['']);
      return false;
    }
   
  }
  
}
