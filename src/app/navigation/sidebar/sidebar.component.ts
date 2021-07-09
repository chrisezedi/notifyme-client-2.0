import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  @Output() closeSidebar = new EventEmitter<void>();
  isAuth:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onCloseSidebar(){
    this.closeSidebar.emit();
  }

  onLogout(){}
}
