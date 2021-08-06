import { Component, OnInit, ChangeDetectionStrategy,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public passedData:any) { }

  ngOnInit(): void {
  }

}