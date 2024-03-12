import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForgotPasswordResponse, LoginResponse, PasswordChangeRequest, PasswordChangeResponse, ResetPasswordRequest, UserLoginRequest, UserRegisterRequest } from '../models/user-models';
import { Observable, ObservedValueOf } from 'rxjs';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
  ) { }

  login(request: UserLoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(Constants.baseServerUrl + 'Account/Login', request, { headers: this.headers })
  }

  register(request: UserRegisterRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(Constants.baseServerUrl + 'Account/Register', request, { headers: this.headers })
  }

  changePassword(request: PasswordChangeRequest): Observable<PasswordChangeResponse> {
    return this.http.post<PasswordChangeResponse>(Constants.baseServerUrl + 'Account/Change-Password', request, { headers: this.headers })
  }

  forgotPassword(request: any): Observable<ForgotPasswordResponse> {
    return this.http.post<ForgotPasswordResponse>(Constants.baseServerUrl + 'Account/Forgot-Password', request, { headers: this.headers })
  }

  resendOtp(request: any): Observable<ForgotPasswordResponse> {
    return this.http.post<ForgotPasswordResponse>(Constants.baseServerUrl + 'Account/Resend-Otp', request, { headers: this.headers })
  }

  resetPassword(request: ResetPasswordRequest): Observable<PasswordChangeResponse> {
    return this.http.post<PasswordChangeResponse>(Constants.baseServerUrl + 'Account/Reset-Password', request, { headers: this.headers })
  }

}
