import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  private iss = {
    login  : 'http://localhost:3030/api/login',
    signup : 'http://localhost:3030/api/signup'
  };

  constructor() { }

  handle(token){
    console.log(token);
    this.set(token);
  }

  set(token){
    localStorage.setItem('token', token);
  }

  get(){
    console.log("GETTING TOKEN", localStorage.getItem('token'));
    return localStorage.getItem('token');
  }
  
  getUser(){
    return localStorage.getItem('username');
  }
  
  setUser(fullname){
    localStorage.setItem('username', fullname);
  }

  remove(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }  

  isValid(){
    const token = this.get();
    
    if(token){
      const payload = this.payload(token);
    
      if(payload){
        return true;
      }
    }
    return false;
  }


  payload(token){
    
    const payload = token.split('.')[1];
        
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }

}

