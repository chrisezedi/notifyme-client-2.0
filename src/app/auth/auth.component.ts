import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  signInForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.required])
  })
  
  constructor(private authService:AuthService, private router:Router, private sharedService:SharedService) { }

  ngOnInit(): void {
    
  }

  logIn(){
    this.authService.login(this.signInForm.value).subscribe((response)=>{
      response.success && this.router.navigate(["/onboard"]);
    }, error => {
      if(error.isVerified = false){
        this.sharedService.showSnackbar("You need to verifiy your account!");
        this.router.navigate(["/auth/verifyaccount/account_not_verified"]);
      }else{this.sharedService.showSnackbar(error.error)}
    })
  }

  get signInFormControls() { return this.signInForm.controls }

}
