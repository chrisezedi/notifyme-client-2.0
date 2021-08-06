import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Channel } from 'src/app/shared/types/channel';
import { MainService } from '../../main.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../../../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelComponent implements OnInit {
  id:string = "";
  channel!:Channel;
  isAdmin!:boolean;
  smallScreen!:boolean;
  selectedFile?:File;
  constructor(private mainService:MainService, private sharedService:SharedService,private route:ActivatedRoute,private router:Router, private cd:ChangeDetectorRef,private authService:AuthService,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.id = param.id;

      this.mainService.getChannel(this.id).subscribe(payload=>{
        this.channel = payload.channel;
        this.isAdmin = this.authService.isAdmin(this.channel.admin?._id);
        this.cd.markForCheck();
      },error=>{
        this.sharedService.showSnackbar("Something went wrong!");
      })
    })
  }

  subscribe(){}

  unsubscribe(){}

  createEvent(){}


  delete(){
    const dialogRef = this.dialog.open(CustomDialogComponent,{data:{
    name:this.channel.name,
    type:'deleteChannel'
  }});
  
    dialogRef.afterClosed().subscribe((result)=>{
      if (result == "true"){
        this.mainService.deleteChannel(this.channel._id).subscribe((response)=>{
          if (response.success){
            this.sharedService.showSnackbar('Channel Deleted');
            this.router.navigate(['/my-channels']);
          }
        },(error)=>console.log(error));
      }
    })
    }

    onUpload(event:any){
      this.selectedFile = event.target.files[0];
      if (this.selectedFile?.type == 'image/jpeg' || this.selectedFile?.type == 'image/png') {
        const imgUpload = new FormData();
        imgUpload.append('image',this.selectedFile,this.selectedFile.name);
        this.mainService.uploadChannelbg(imgUpload,this.channel._id).subscribe((response)=>{
          if(response.success){
            this.channel.imgurl = response.image;
            this.cd.markForCheck();
          }
        },(error)=>console.log(error));
      }else{
         this.sharedService.showSnackbar('File must be a JPEG or PNG');
      }
    }
}
