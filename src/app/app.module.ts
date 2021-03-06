import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StarComponent } from './shared/star.component';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { CentersListComponent } from "./centers/centers-list.component";
import { WelcomeComponent } from "./home/welcome.component";
import { CentersDetailsComponent } from './centers/centers-details.component';
import { CenterGuardService } from './centers/center-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

import {FlashMessagesModule} from 'angular2-flash-messages';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { BookingComponent } from './booking/booking.component';

import {CalendarModule} from "ap-angular2-fullcalendar";


@NgModule({
  declarations: [
    AppComponent,
    CentersListComponent,
    WelcomeComponent,
    StarComponent,
    CentersDetailsComponent,
    LoginComponent,
    RegisterComponent,
    MyprofileComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'centers', component: CentersListComponent },
        { path: 'centers/:id', canActivate: [ CenterGuardService ], component: CentersDetailsComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },  
        { path: 'myprofile', component: MyprofileComponent },     
        { path: 'booking', component: BookingComponent },       
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    FlashMessagesModule,
    CalendarModule
    
    
  ],
  providers: [CenterGuardService,ValidateService,AuthService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
