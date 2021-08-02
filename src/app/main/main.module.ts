import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { OnboardComponent } from './channel_components/onboard/onboard.component';

//material components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChannelsComponent } from './channel_components/channels/channels.component';
import { HomeComponent } from './channel_components/home/home.component';

@NgModule({
  declarations: [
    OnboardComponent,
    ChannelsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MainModule { }
