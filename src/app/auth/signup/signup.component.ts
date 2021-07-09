import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    occupation: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  constructor(private authService:AuthService,private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  get signUpFormControls(){return this.signupForm.controls}

  signup(){
    this.authService.signup(this.signupForm.value).subscribe((response)=>{
      response.success && this.sharedService.showSnackbar("A verification link has been sent to your email address")
    },(error)=>{
      if(error.status == 500) {
        this.sharedService.showSnackbar("something went wrong")
      }else{
        this.sharedService.showSnackbar(error.error.msg)
      }
    })
  }
}
