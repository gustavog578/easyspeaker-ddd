import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public form = {
    email : null,
    name : null,
    lastname : null,
    password : null,
    user_type: 0,
    password_confirmation: null,
    genre : null
  };

  public errors = {};

  constructor(private Jarwis:JarwisService, private router: Router) { }

  onSubmit() {
    
    return this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)

    );
  }

  handleResponse(data) {
   
    console.log("repsonse data", data);

    if(data){
      this.router.navigate(['/login']);
    }

    
    //this.Token.handle(data.access_token);
    //this.Auth.changeAuthStatus(true);
    //this.getLoggedUser(data);
    //this.setUserName();
    //this.router.navigateByUrl('/login');

    
    /*if (parseInt(this.userLogged.user_type) == 1) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/profile');
    }*/

  }

  handleError(error) {
    console.log(error.error.email);
    this.errors = {"email" : error.error.email}
  
    
  }
  ngOnInit() {
  }

}
