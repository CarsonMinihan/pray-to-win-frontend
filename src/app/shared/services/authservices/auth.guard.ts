import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NavbarService } from '../navbar.service';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private Authguardservice: AuthguardService,
    private router: Router,
    private nav: NavbarService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    var isAuthenticated = this.Authguardservice.gettoken();

    if (!isAuthenticated) {
      this.nav.hide();
      this.router.navigate(['/login']);
    } else {
      this.nav.show();
    }
    return isAuthenticated;
  }
}
