import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnboardComponent implements OnInit {
  categories:string[] = [];
  constructor(private mainService:MainService) { }

  ngOnInit(): void {
    this.mainService.getCategories().subscribe((response)=>{
      console.log(response)
      // this.categories = response;
    }); 
  }

}
