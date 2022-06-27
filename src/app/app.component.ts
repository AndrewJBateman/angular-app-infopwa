/*
Subscribe to update notifications from the Service Worker, trigger update checks, and forcibly activate updates.
*/

import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-app-infoPwa";

  update = false;
  info: any;

  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe((event) => {
      this.update = true;
      // automatically reloads browser when there are updates
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.data.getInfo().subscribe((res) => {
      this.info = res;
    });
  }
}
