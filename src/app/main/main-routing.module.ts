import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ChannelsComponent } from './channel_components/channels/channels.component';
import { HomeComponent } from './channel_components/home/home.component';
import { OnboardComponent } from './channel_components/onboard/onboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full", canActivate:[AuthGuard] },
  { path: 'onboard', component: OnboardComponent, canActivate:[AuthGuard] },
  { path: 'channels', component: ChannelsComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
