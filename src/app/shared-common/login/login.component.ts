import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;

  constructor(
private fb:FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(),
      password: new FormControl(),
    })
  }



  onSubmit() {

  }

}
