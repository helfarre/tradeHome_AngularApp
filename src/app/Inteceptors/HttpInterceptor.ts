import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';

@Injectable()
export class Interceptor implements HttpInterceptor{
    private AUTH_HEADER = "Autorization";
    private token ;
    urlsToNotUse: string;
    constructor(
      ) {
        this.urlsToNotUse= 
          'https://finnhub.io/.+';
        
      }
    
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   //   console.log("url is " +req.url.toString());
         if (localStorage.getItem("token") != null )
        {
            if(!new RegExp(this.urlsToNotUse).test(req.url.toString()))
               { this.token = localStorage.getItem("token");
            req=this.addAuthenticationToken(req);}
        }
        //console.log(req);
        return next.handle(req);
    }

    private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
        // If we do not have a token yet then we should not set the header.
        // Here we could first retrieve the token from where we store it.
        // if (!this.token) {
        //   return request;
        // }
        // // If you are calling an outside domain then do not add the token.
        // if (!request.url.match(/www.mydomain.com\//)) {
        //   return request;
        // }
        return request.clone({
          headers: request.headers.set(this.AUTH_HEADER, "Bearer " + this.token)
        });
      }
    }



