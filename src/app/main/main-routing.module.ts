import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { NotfoundComponent } from '../notfound/notfound.component';
import { ChannelComponent } from './channel_components/channel/channel.component';
import { ChannelsComponent } from './channel_components/channels/channels.component';
import { CreateComponent } from './channel_components/create/create.component';
import { EditComponent } from './channel_components/edit/edit.component';
import { HomeComponent } from './channel_components/home/home.component';
import { MyChannelsComponent } from './channel_components/my-channels/my-channels.component';
import { OnboardComponent } from './channel_components/onboard/onboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full", canActivate:[AuthGuard] },
  { path: 'onboard', component: OnboardComponent, canActivate:[AuthGuard] },
  { path: 'channels', component: ChannelsComponent, canActivate:[AuthGuard] },
  { path: 'my-channels', component: MyChannelsComponent,canActivate:[AuthGuard] },
  { path: 'my-channels/create', component:CreateComponent, canActivate:[AuthGuard]},
  { path: 'channel/:id', component:ChannelComponent, canActivate:[AuthGuard] },
  { path: 'channel/:id/edit', component:EditComponent, canActivate:[AuthGuard] },
  { path: '**', component:NotfoundComponent,canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
