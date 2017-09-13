import { Component } from '@angular/core';
import { CenterService } from "./centers/center.service";

@Component({
  selector: 'pm-root',
  template: `
  <div>
  <nav class='navbar navbar-default'>
      <div class='container-fluid'>
          <a class='navbar-brand'>{{pageTitle}}</a>
          <ul class='nav navbar-nav'>
              <li><a [routerLink]="['/welcome']">Home</a></li>
              <li><a [routerLink]="['/centers']">Centers List</a></li>
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
