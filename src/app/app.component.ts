import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from './shared-common/login/login.component';
import { Router } from '@angular/router';
import { AuthService } from './shared-common/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isUserLoggedIn = false;
  sidebarVisible: boolean = false;
  userName: string = "";
  ref: DynamicDialogRef | undefined;





  constructor(
    public dynamicDialogRef: DynamicDialogRef,
    public dialogService: DialogService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isUserLoggedIn = (this.authService.isLoggedIn() && this.authService.isUserAuthorized());
    if (!this.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
  }




  login() {
    this.router.navigate(['/login']);
  }


  logout() {
    this.authService.removeToken();
    window.location.reload();
  }




}
