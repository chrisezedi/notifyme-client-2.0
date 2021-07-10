import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  isAuth:boolean = false;
  @Output() sidebarToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidebar(){
    this.sidebarToggle.emit()
  }
}
