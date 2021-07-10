import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifyAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
