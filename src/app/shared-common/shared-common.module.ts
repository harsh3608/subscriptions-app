import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedCommonRoutingModule } from './shared-common-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';








@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedCommonRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,



    

  ],
  providers:[
    MessageService
  ]
})
export class SharedCommonModule { }
