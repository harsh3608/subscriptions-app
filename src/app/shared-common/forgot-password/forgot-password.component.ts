import { Component, OnInit } from '@angular/core';
import { map, takeWhile, timer } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { ResetPasswordRequest } from '../shared/models/user-models';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  isOtpSent: boolean = false;
  isVerified: boolean = false;
  display: any;
  disableResendOtp: boolean = true;
  otp!: string;
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.timer();

  }



  sendMail() {
    var mailRequest = {
      email: this.email
    }
    this.userService.forgotPassword(mailRequest).subscribe((res) => {
      if (res.isSuccess) {
        this.isOtpSent = true;
      } else {

      }
    });
  }

  validateOtp() {
    this.userService.validateOtp(this.otp).subscribe((res) => {
      if (res.isSuccess) {
        this.isVerified = true;
      } else {

      }
    })
  }

  resendOtp() {
    var mailRequest = {
      email: this.email
    }
    this.userService.resendOtp(mailRequest).subscribe((res) => {
      if (res.isSuccess) {
        this.disableResendOtp = true;
        this.timer();
      } else {

      }
    })
  }

  resetPassword() {
    var request: ResetPasswordRequest = {
      email: this.email,
      otp: this.otp,
      newPassword: this.password
    }

    
  }



  timer() {
    let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
        this.disableResendOtp = false;
      }
    }, 1000);
  }

}
