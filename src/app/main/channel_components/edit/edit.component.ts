import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { Channel } from 'src/app/shared/types/channel';
import { ChannelCategory } from 'src/app/shared/types/channel_cat';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {
  editChannelForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
  });

  categories:ChannelCategory[] = [];
  channel!:Channel;
  id:string = "";

  constructor(private mainService:MainService,private cd:ChangeDetectorRef, private router:Router, private route:ActivatedRoute, private sharedService:SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = params.id;
      this.mainService.getChannel(params.id).subscribe(payload=>{
        this.channel = payload.channel;
        console.log(this.channel)
        this.cd.markForCheck();
      });
    });
    this.mainService.getCategories().subscribe((categories)=>{
      this.categories = categories;
      this.cd.markForCheck();
    })
  }

  setFormValues(){
    if(this.editChannelForm.controls.name.value === ""){
      this.editChannelForm.controls.name.setValue(this.channel.name);
    }
    if(this.editChannelForm.controls.description.value === ""){
      this.editChannelForm.controls.description.setValue(this.channel.description);
    }
    if(this.editChannelForm.controls.category.value === ""){
      this.editChannelForm.controls.category.setValue(this.channel.category);
    }
  }

  submit(){
    if(this.editChannelForm.touched){
      this.setFormValues();
      this.mainService.updateChannel(this.id,this.editChannelForm.value).subscribe(response=>{
        response.success && this.router.navigate([`/channel/${this.id}`]);
      },error=>{
          this.sharedService.showSnackbar("Something went Wrong");
        });
    }
  }

}
