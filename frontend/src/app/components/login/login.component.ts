import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email : null,
    password: null
  };


  public userLogged = {
    id: null,
    name: null,
    lastname: null,
    user_type : null
  };

  public error = null;
  
  constructor(private Jarwis:JarwisService,
              private Token:TokenService,
              private router : Router,
              private Auth: AuthService ) { }

  onSubmit(){
     this.Jarwis.login(this.form).subscribe(
       data => this.handleResponse(data),  
      error => this.handleError(error)
      
    );
  }
  
  handleResponse(data){
    console.log(data);
    this.Token.handle(data.access_token); 
    this.Auth.changeAuthStatus(true);
    // Set user logged    
    this.Auth.showUser(data.user.username, data.user.lastname);
    // Set user on token
    this.Auth.saveUser(data.user.username, data.user.lastname);
    
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
