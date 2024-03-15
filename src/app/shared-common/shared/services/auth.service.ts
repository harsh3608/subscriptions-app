import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenCustomClaims } from "../models/common-models";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  jwtHelperService = new JwtHelperService();

  constructor() { }

  getLoggedInUserDetails(): TokenCustomClaims {
    const token = sessionStorage.getItem('access-token') || '';
    const decodedToken: any = this.jwtHelperService.decodeToken(token);
    let claims: TokenCustomClaims = {
      userId: decodedToken?.userId,
      PersonName: decodedToken?.PersonName,
      Email: decodedToken?.Email,
      UserType: decodedToken?.UserType,
      exp: decodedToken?.exp
    }
    return claims;
  }

  isUserAuthorized() {
    const accessToken = sessionStorage.getItem('access-token') || '';
    const payload = JSON.parse(atob(accessToken.split('.')[1]));
    const expirationDate = new Date(payload.exp * 1000);
    const currentDate = new Date();
    return expirationDate > currentDate;
  }

  getUserToken(): string {
    const token = sessionStorage.getItem('access-token') || '';
    const decodedToken: string = this.jwtHelperService.decodeToken(token) || '';
    return decodedToken;
  }

  removeToken() {
    sessionStorage.clear();
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem("access-token") ? true : false
  }

}