import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { ChannelCategory } from 'src/app/shared/types/channel_cat';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {
  createChannelForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });
  categories:ChannelCategory[] = [];
  constructor(private mainService:MainService,private cd:ChangeDetectorRef, private router:Router, private sharedService:SharedService) { }

  ngOnInit(): void {
    this.mainService.getCategories().subscribe((categories)=>{
      this.categories = categories;
      this.cd.markForCheck();
    })
  }

  get createChannelFormControls() { return this.createChannelForm.controls }

  submit(){
    this.mainService.createChannel(this.createChannelForm.value).subscribe(response=>{
      response.success && this.router.navigate(["/my-channels"]);
    },error=>{
      this.sharedService.showSnackbar("Something went Wrong");
    })
  }

}
