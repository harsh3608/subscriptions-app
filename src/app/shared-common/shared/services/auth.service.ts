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
    const token = sessionStorage.getItem('access-token') || '';
    const decodedToken: any = this.jwtHelperService.decodeToken(token);
    const expirytime = this.jwtHelperService.getTokenExpirationDate(decodedToken) || '';
    if(expirytime > new Date){
      return true;
    }
    return false
  }

}