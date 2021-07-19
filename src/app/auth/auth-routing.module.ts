import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component:PasswordResetComponent },
  { path: 'verifyaccount/:token', component:VerifyAccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
