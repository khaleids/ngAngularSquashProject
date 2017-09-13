import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StarComponent } from './shared/star.component';

import { AppComponent } from './app.component';
import { CentersListComponent } from "./centers/centers-list.component";
import { WelcomeComponent } from "./home/welcome.component";
import { CentersDetailsComponent } from './centers/centers-details.component';
import { CenterGuardService } from './centers/center-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CentersListComponent,
    WelcomeComponent,
    StarComponent,
    CentersDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'centers', component: CentersListComponent },
        { path: 'centers/:id', canActivate: [ CenterGuardService ], component: CentersDetailsComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
    
  ],
  providers: [CenterGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
