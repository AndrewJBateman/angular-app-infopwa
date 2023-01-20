import { Injectable } from "@angular/core";
import { SwUpdate, VersionReadyEvent } from "@angular/service-worker";
import { filter, map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class UpdateService {
  constructor(private updates: SwUpdate) {}

  public checkForUpdates() {
    this.updates.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === "VERSION_READY"),
        map((evt) => ({
          type: "UPDATE_AVAILABLE",
          current: evt.currentVersion,
          available: evt.latestVersion,
        }))
      )
      .subscribe((event) => {
        if (event.type === "UPDATE_AVAILABLE") {
          this.promptUser();
        }
      });
  }

  private promptUser() {
    this.updates.activateUpdate().then(() => {
      window.location.reload();
    });
  }
}
