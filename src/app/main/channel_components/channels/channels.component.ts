import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private mainService:MainService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      // this.mainService.getChannels(queryParams.cat).subscribe((response)=>console.log(response))
    })
  }

}
