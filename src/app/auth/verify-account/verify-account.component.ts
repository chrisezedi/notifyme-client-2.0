import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifyAccountComponent implements OnInit {
  token:any;
  jwtError?:boolean;

  resendVlinkForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
  });

  constructor(private route:ActivatedRoute, private authService:AuthService, private cd:ChangeDetectorRef, private sharedService:SharedService, private router:Router) { 
    this.token = this.route.snapshot.paramMap.get('token');

   }

  ngOnInit(): void {
    if(this.token){
      this.authService.verify(this.token).subscribe(response => {
        if (response.success) {
          this.authService.storeToken(response.token) && this.router.navigate(['/onboard']);
        }
        },error => {
          this.jwtError = true;
          this.cd.markForCheck();
        })
    }
  }

  resendVlink(){
    this.authService.resendVerificationLink(this.resendVlinkForm.controls.email.value).subscribe((response) => {
      if (response.success) {
        this.sharedService.showSnackbar("Verification Link sent");
      }
    }, (error)=>{
      if (error.status == 400){
        this.sharedService.showSnackbar(error.error.msg);
        return;
      }
      this.sharedService.showSnackbar("Something went wrong!");
      console.log(error)
    })
  }

  get Controls() { return this.resendVlinkForm.controls }

}
