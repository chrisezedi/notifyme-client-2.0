import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordResetComponent implements OnInit {
  resetting:boolean = false;
  resendPasswordLinkForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
  passwordResetForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  get resendPasswordLinkFormControls(){ return this.resendPasswordLinkForm.controls }

  get passwordResetFormControls(){ return this.passwordResetForm.controls }

  sendPasswordResetLink(){}

  resetUserPassword(){}


}
