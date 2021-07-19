import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

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
  
  constructor(private authService:AuthService, private router:Router) { 
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe((response) => {
      if(response.success){
        console.log(response.token)
         this.authService.storeToken(response.token) && this.router.navigate(['/']);
      }
    })
  }

  signIn(){

  }

  get signInFormControls() { return this.signInForm.controls }

}
