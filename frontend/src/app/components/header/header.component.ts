import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges{

  public loggedIn: boolean;
  public user:string;
  
  constructor( private auth: AuthService,
               private router: Router,
               private token: TokenService ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
    this.auth.userUpdated.subscribe(user => this.user = user);
  
  }
  
  ngOnChanges(){
    this.user = this.token.getUser();
    console.log(this.user);
  }

  
  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
   
  }




}
