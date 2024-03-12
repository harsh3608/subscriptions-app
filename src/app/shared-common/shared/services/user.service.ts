import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, UserLoginRequest, UserRegisterRequest } from '../models/user-models';
import { Observable } from 'rxjs';
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







}
