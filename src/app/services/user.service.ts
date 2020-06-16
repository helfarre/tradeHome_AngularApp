import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.Model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl :string= "https://trade-home-rest-api.herokuapp.com/";
  constructor(private httpClient : HttpClient) { }

  addUser(  user  :User) {
    let url = this.baseUrl + "User/addUser";
    return this.httpClient.post(url,user);
  }



}
