import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
//import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-infoPwa';

	update: boolean = false;
	info: any;

	constructor(updates: SwUpdate, private data: DataService) {
		updates.available.subscribe(event => {

			this.update = true;
			updates.activateUpdate().then(() => document.location.reload());
		})
	}

	ngOnInit() {
		this.data.getInfo().subscribe(res => {
			this.info = res;
		})
	}

}


