import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardGuard implements CanActivate {
  constructor(private codeservice:AuthenticationService,private router:Router){}

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
