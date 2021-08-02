import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { MainService } from 'src/app/main/main.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  @Output() closeSidebar = new EventEmitter<void>();
  isAuth!:boolean;
  smallScreen!:boolean;
  isDarkMode!:boolean;
  darkModeStyle!:boolean;
  constructor(private authService:AuthService, private mainService:MainService, private cd:ChangeDetectorRef, private router:Router) { 
    this.isDarkMode = this.mainService.isDarkMode();
   }

  ngOnInit(): void {
    this.authService.isAuthStatus.subscribe(response => {
      this.isAuth = response;
      this.cd.markForCheck();
    });
  }

  onCloseSidebar(){
    this.closeSidebar.emit();
  }

  onLogout(){
    this.authService.logout().subscribe(response => {
      if(response.success){
        this.closeSidebar.emit();
        this.authService.isAuthStatus.next(false);
        this.router.navigate(["/auth"]);
      } 
        
    })
  }

  onDarkModeToggle(){
    this.mainService.switchTheme();
    this.darkModeStyle = this.mainService.isDarkMode();
  }
}
