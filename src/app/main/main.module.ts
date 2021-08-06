import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { OnboardComponent } from './channel_components/onboard/onboard.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

import { ChannelsComponent } from './channel_components/channels/channels.component';
import { HomeComponent } from './channel_components/home/home.component';
import { MyChannelsComponent } from './channel_components/my-channels/my-channels.component';
import { CreateComponent } from './channel_components/create/create.component';
import { ChannelComponent } from './channel_components/channel/channel.component';
import { EventsComponent } from './event_components/events/events.component';
import { UpcomingEventsComponent } from './event_components/upcoming-events/upcoming-events.component';
import { EditComponent } from './channel_components/edit/edit.component';

@NgModule({
  declarations: [
    OnboardComponent,
    ChannelsComponent,
    HomeComponent,
    MyChannelsComponent,
    CreateComponent,
    ChannelComponent,
    EventsComponent,
    UpcomingEventsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MainRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatListModule
  ]
})
export class MainModule { }
