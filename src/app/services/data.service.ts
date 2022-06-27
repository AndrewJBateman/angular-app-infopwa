import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Info } from "../interfaces/info.model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  getInfo() {
    return this.http.get<Info>("https://api.chucknorris.io/jokes/random");
  }
}
