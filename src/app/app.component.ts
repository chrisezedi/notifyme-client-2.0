import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './shared/loader.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { MainService } from './main/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'notifyme';
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  openSidebar?:boolean;
  smallScreen?:boolean;
  themeMode!:string | null;

  constructor(private loaderService:LoaderService,private observer:BreakpointObserver, private mainService:MainService){}
  ngOnInit():void{
    this.mainService.initTheme();

    this.observer.observe(['(min-width:768px)']).subscribe((screen)=>{
      if(screen.matches){
        console.log("Big screen")
        this.smallScreen = false;
        this.openSidebar = true;
      }else{
        this.smallScreen = true;
        this.openSidebar = false;
        console.log("SMall screen")
       
      }
    })
  }
  
  toggleSidebar(){
    this.openSidebar = !this.openSidebar;
  }
}
