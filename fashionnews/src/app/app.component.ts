import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fashionnews';

  constructor(
  	private location: Location,
  	private myService: MyserviceService
  ) {}
  ngOnInit() {
  }
}
