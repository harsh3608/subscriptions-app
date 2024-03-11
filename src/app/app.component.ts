import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from './shared-common/login/login.component';

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
  ) { }

  ngOnInit(): void {

  }




  login() {
    this.ref = this.dialogService.open(LoginComponent, {
      header: 'Sign In',
      width: '35%',
      height: '65%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
    });
    this.ref.onClose.subscribe((res: any) => {
      if (res?.isSuccess) {
        
      }
    });
  }


  logout() {

  }




}
