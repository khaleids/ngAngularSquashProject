import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StarComponent } from './shared/star.component';

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

@NgModule({
  declarations: [
    AppComponent,
    CentersListComponent,
    WelcomeComponent,
    StarComponent,
    CentersDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'centers', component: CentersListComponent },
        { path: 'centers/:id', canActivate: [ CenterGuardService ], component: CentersDetailsComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },        
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    FlashMessagesModule
    
  ],
  providers: [CenterGuardService,ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
