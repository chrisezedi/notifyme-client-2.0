import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.MainService.getCategories().subscribe((response)=>{
    //   this.categories = response;
    // }); 
  }

}
