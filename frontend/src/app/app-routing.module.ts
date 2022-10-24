import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { SignUpTeacherComponent } from './components/sign-up-teacher/sign-up-teacher.component';

const appRoutes : Routes = [
  {
    path : 'login',
    component : LoginComponent,  
    canActivate: [BeforeLoginService]  
  },
  {
    path: 'signup',
    component: SignUpComponent,
    canActivate: [BeforeLoginService]  
  }, 
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]  
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path : 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'teachers',
    component: TeachersComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'sign-up-teacher',
    component: SignUpTeacherComponent,
    canActivate: [BeforeLoginService]
  },
  { path: '**', redirectTo: 'login' },

]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports : [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
