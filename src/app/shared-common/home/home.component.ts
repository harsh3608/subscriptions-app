import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isUserLoggedIn = false;


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isUserLoggedIn = (this.authService.isLoggedIn() && this.authService.isUserAuthorized());
  }


}
