/*
Subscribe to update notifications from the Service Worker, trigger update checks, and forcibly activate updates.
*/

import { Component } from "@angular/core";
import { UpdateService } from "./services/pwa.service";

import { DataService } from "./services/data.service";
import { Observable } from "rxjs";
import { Info } from "./interfaces/info.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-app-infoPwa";
  info$: Observable<Info>;

  constructor(
    private updateService: UpdateService,
    private data: DataService
  ) {}

  ngOnInit() {
    this.checkForSWUpdates();
    this.info$ = this.data.getInfo();
  }

  checkForSWUpdates() {
    this.updateService.checkForUpdates();
  }
}
