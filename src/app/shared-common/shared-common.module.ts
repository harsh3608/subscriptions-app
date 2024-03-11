import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedCommonRoutingModule } from './shared-common-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';








@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedCommonRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class SharedCommonModule { }
