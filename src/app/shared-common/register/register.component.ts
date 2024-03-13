import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserRegisterRequest } from '../shared/models/user-models';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  registrationRequest!: UserRegisterRequest;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    })
  }


  onSubmit() {
    this.registrationForm.markAllAsTouched();
    debugger;
    if (this.registrationForm.valid) {
      this.registrationRequest = {
        personName: `${this.registrationForm.value.firstName} ${this.registrationForm.value.lastName}`,
        gender: '',
        email: this.registrationForm.value.email,
        phoneNumber: '',
        password: this.registrationForm.value.password,
        confirmPassword: this.registrationForm.value.confirmPassword,
        userType: 0
      };
      //call service method
      this.userService.register(this.registrationRequest).subscribe((res) => {
        if (res.isSuccess) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
          sessionStorage.setItem('access-token', res.response.token)
          this.router.navigate(['/']);
        } else {
          this.messageService.add({ severity: 'warn', summary: 'Failure', detail: res.message });
        };
      });
    } else {
    }
  }

}
