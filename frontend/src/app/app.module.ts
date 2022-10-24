import { BrowserModule } from '@angular/platform-browser';

import { NgModule, LOCALE_ID  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatNativeDateModule, MatMenuModule, MatToolbarModule, MatSidenavModule } from "@angular/material";
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';

import { MatListModule, MatListItem } from '@angular/material/list';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { AgmCoreModule } from '@agm/core';

// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { JarwisService } from '../app/services/jarwis.service';
import { TokenService } from './services/token.service';
import { ProfileComponent } from './components/profile/profile.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeachersService } from './services/teachers/teachers.service';
import { AuthService } from './services/auth/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
//import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SignUpTeacherComponent } from './components/sign-up-teacher/sign-up-teacher.component';
import { HeaderComponent } from './components/header/header.component';
import { ListTeachersInfoComponent } from './components/list-teachers-info/list-teachers-info.component';
import { MeetingPlacesComponent } from './components/meeting-places/meeting-places.component';
import { LanguagesService } from './services/languages.service';
import { MapsComponent } from './components/maps/maps.component';
import { ReviewsComponent, AppDialog } from './components/reviews/reviews.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ProfileComponent,
    TeachersComponent,
    SignUpTeacherComponent,
    HeaderComponent,
    ListTeachersInfoComponent,
    MeetingPlacesComponent,
    MapsComponent,
    ReviewsComponent,
    AppDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SnotifyModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule ,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatTabsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmC4d7y9ll-iY2YUrUMkNyw94Xe2fbc94'
    })
  ],
  providers: [JarwisService, 
              TokenService, 
              TeachersService,
              LoginComponent,
              AuthService,
              AfterLoginService,
              BeforeLoginService, 
              LanguagesService,
               { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,{ provide: LOCALE_ID, useValue: "es-AR" }
  ],
  entryComponents: [AppDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
