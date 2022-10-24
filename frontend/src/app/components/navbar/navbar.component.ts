import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public user: string;

  public loggedIn : boolean;

  public titleLanguage = "Idioma del sitio";
  
  currentUser : string; 

  constructor(private Auth : AuthService,
              private router: Router, 
              private Token : TokenService) { }

  ngOnInit() {
   
    console.log("logged in component before ", this.loggedIn)
    this.Auth.authStatus.subscribe(value => this.loggedIn = value)
    console.log("logged in component after ", this.loggedIn)

    this.Auth.userUpdated.subscribe(user => this.user = user);
    
   
  }

  logout(event : MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false); 
    this.router.navigateByUrl('/login');
  }

  ngOnChanges(){
   
  }



}
