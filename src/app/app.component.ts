import { Component } from '@angular/core';
import { CenterService } from "./centers/center.service";

@Component({
  selector: 'pm-root',
  template: `
  <div>
  <nav class='navbar navbar-default'>
      <div class='container-fluid'>
          <a class='navbar-brand'>{{pageTitle}}</a>
          <ul class='nav navbar-nav navbar-left'>
              <li  [routerLinkActive]="['active']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="['/welcome']">Home</a></li>
              <li  [routerLinkActive]="['active']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="['/centers']">Centers List</a></li>
          </ul>
          <ul class='nav navbar-nav navbar-right'>
          <li  [routerLinkActive]="['active']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="['/login']">Login</a></li>
          <li  [routerLinkActive]="['active']" [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="['/register']">Register</a></li>
      </ul>
      </div>
  </nav>
  <div class='container'>
      <router-outlet></router-outlet>
  </div>
</div>
`,
providers: [ CenterService ]
})
export class AppComponent {
  pageTitle: string = 'Squash i Malmö';
}
