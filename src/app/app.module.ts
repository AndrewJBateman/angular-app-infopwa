import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./services/data.service";
import { UpdateService } from "./services/pwa.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [DataService, UpdateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
