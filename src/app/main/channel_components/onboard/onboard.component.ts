import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MainService } from '../../main.service';
import { ChannelCategory } from '../../../shared/types/channel_cat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnboardComponent implements OnInit {
  categories:ChannelCategory[] = [];
  userSelectedCat:any[]=[];
  constructor(private mainService:MainService, private cd:ChangeDetectorRef, private router:Router) { }

  ngOnInit(): void {
    this.mainService.getCategories().subscribe((response)=>{
      this.categories = response;
      this.cd.markForCheck();
    }); 
  }

  onSelectCatToggle(category:ChannelCategory){
    const name = category.name;
    if(this.userSelectedCat.includes(name)){
      const index = this.userSelectedCat.indexOf(name);
      this.userSelectedCat.splice(index,1);
      category.isSelected = false;
    }else{
      this.userSelectedCat.push(name);
      category.isSelected = true;
    }
   }


  loadChannels(){
    this.router.navigate(['channels'],{queryParams:{cat:this.userSelectedCat}});
  }

}
