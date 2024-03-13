import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { UserLoginRequest } from '../shared/models/user-models';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginRequest!: UserLoginRequest;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,15}')
      ]),
    })
  }



  onSubmit() {
    this.loginForm.markAllAsTouched();
    debugger;
    if (this.loginForm.valid) {
      this.loginRequest = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      //call service method
      this.userService.login(this.loginRequest).subscribe( (res)=> {
        if(res.isSuccess){
          
          this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
        }else{
          this.messageService.add({ severity: 'warn', summary: 'Failure', detail: res.message });
        };
      });
    } else {
      debugger;
    }
  }

}
