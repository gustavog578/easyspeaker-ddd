import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class JarwisService {

  private baseUrl = 'http://localhost:3030/auth';

  constructor(private http: HttpClient) { }

  signup(data){
       
    return this.http.post(`${this.baseUrl}/register`, data);
    
  }

  login(data){
    return this.http.post(`${this.baseUrl}/signin`, data);
  }

  me(){
    return this.http.get(`${this.baseUrl}/me`);
  }

  sendPasswordResetLink(data){
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
  }

  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data);
  }
  

}
