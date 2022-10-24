import { Injectable, Output, EventEmitter } from '@angular/core';
import { TokenService } from '../token.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()

export class AuthService {

  private loggedIn = new BehaviorSubject<boolean | false>(this.Token.loggedIn());
  
  public userUpdated = new BehaviorSubject<string>(this.Token.getUser());


  authStatus = this.loggedIn.asObservable();
  
  userLogged = this.userUpdated.asObservable();

  changeAuthStatus(value : boolean){

    console.log("new value status", value)
    this.loggedIn.next(value);

  }  

 /* getCurrentUser(): Observable<string> {
    return this.userLogged.asObservable();
  }
*/
  showUser(username : string, lastname : string){
    let fullname = username + ' ' +lastname;
    this.userUpdated.next(fullname);
  }

  saveUser(name: string, lastname:string){
    let fullname = name + ' ' + lastname;
    this.Token.setUser(fullname);

  }

  constructor(private Token : TokenService) {
    
   }


}
