import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CommonGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = this.authService.getLoggedInUserDetails().UserType;
      if (this.authService.isLoggedIn() && role == 'Admin' || role == 'User') {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}
