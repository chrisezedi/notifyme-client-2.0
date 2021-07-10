import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './shared/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifyme';
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService:LoaderService){}
}
