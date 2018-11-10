import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-infoPwa';

	update: boolean = false;

	constructor(updates: SwUpdate) {
		updates.available.subscribe(event => {

			this.update = true;
		})
	}

}


