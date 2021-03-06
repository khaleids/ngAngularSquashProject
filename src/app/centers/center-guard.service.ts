// a service to prevent navigation through false id

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class CenterGuardService implements CanActivate {

  constructor(private _router: Router) { }
  
    canActivate(route: ActivatedRouteSnapshot): boolean {
      let id = +route.url[1].path;
      if (isNaN(id) || id < 1) {
        alert('Invalid center Id');
        this._router.navigate(['/centers']);
        return false;
      };
      return true;
    }
}
