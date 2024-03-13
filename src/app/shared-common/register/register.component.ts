import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserRegisterRequest } from '../shared/models/user-models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  registrationRequest!: UserRegisterRequest;


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      userType: new FormControl(0),
    })
  }


  onSubmit() {

  }

}
