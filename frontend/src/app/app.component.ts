import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'app';
  public loggedIn: boolean;
 
  constructor( private auth: AuthService){
    this.auth.authStatus.subscribe( value => this.loggedIn = value );
    console.log(this.loggedIn);
  }

  
}
