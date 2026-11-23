import { Injectable } from '@angular/core';
import { login } from '../model/penny.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class PennyService {
  private loginUrl = 'http://localhost:3000/login';
  private registerUrl = 'http://localhost:3000/register';
  private loginData : login = { username: '', password: '' };

  constructor(private http: HttpClient) {}

  getLoginData(){
    return this.loginData;
  }

  setLoginData(data: login){
    this.loginData = data;
  }

  clearLoginData(){
    this.loginData = { username: '', password: '' };
  }

  login(username: string, password: string) {
    debugger;
    return this.http.post(this.loginUrl, {
      username,
      password
    });
  }  

  register(username: string, password: string) {
   debugger;    
    return this.http.post(this.registerUrl, {
      username,
      password
    });
  }
}