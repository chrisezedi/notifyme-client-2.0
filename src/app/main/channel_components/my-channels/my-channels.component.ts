import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MainService } from '../../main.service';
import { Channel } from '../../../shared/types/channel';

@Component({
  selector: 'app-my-channels',
  templateUrl: './my-channels.component.html',
  styleUrls: ['./my-channels.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyChannelsComponent implements OnInit {
  channels!:Channel[];
  constructor(private mainService:MainService, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.mainService.getMyChannels().subscribe(response => {
      this.channels = response.channels;
      this.cd.markForCheck();
    });
  }

}
