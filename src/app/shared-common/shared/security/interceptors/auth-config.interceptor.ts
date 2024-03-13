import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthConfigInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (this.authService.isLoggedIn() && !this.authService.isUserAuthorized()) {
      // redirect to login page
      this.authService.removeToken();
      this.router.navigate(['/']);
      // this.toastr.error('User Session Expired! Please, Login to continue !', 'Logged Out', {
      //   timeOut: 2000,
      // });
    }

    const authToken = this.authService.getUserToken();
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer " + authToken
      }
    });
    return next.handle(request);

  }
}


