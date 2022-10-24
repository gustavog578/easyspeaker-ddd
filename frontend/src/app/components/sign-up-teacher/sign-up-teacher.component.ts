import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { SnotifyService } from 'ng-snotify';
import { Router } from '@angular/router';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-sign-up-teacher',
  templateUrl: './sign-up-teacher.component.html',
  styleUrls: ['./sign-up-teacher.component.css']
})
export class SignUpTeacherComponent implements OnInit {

  public form = {
    email : null,
    name : null,
    lastname : null,
    password : null,
    password_confirmation: null,
    user_type : 1,
    genre: null,
    date_birth: null       
  };
 
  public errors = [];
  
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(2019, 0, 1);

  constructor(
              private Jarwis: JarwisService,
              private router: Router,
              private Notify: SnotifyService    
            ) { }

  ngOnInit() {
  }
  onSubmit() {
   
    this.form.date_birth = this.formatDate(this.form.date_birth);
  
    return this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)

    );
   }

  handleResponse(data) {
    let _router = this.router;

    this.Notify.confirm('Registrado correctamente, Ahora ingresa con tus datos', {
      buttons: [{
        text: "Ok",
        action: toster => {
          _router.navigateByUrl('/login'),
            this.Notify.remove(toster.id)
        }
      },
      ]
    })
  }

  handleError(error) {
    console.log(error);
    this.errors = error.error.errors;
  }

  formatDate(date:Date):string{
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear(); 

    let mes = month < 10 ? '0' + month : '' + month;

    return `${year}-${mes}-${day}`;
  }

}
