import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IConfig } from "../../models/config";

@Injectable({
  providedIn: "root",
})
export class AppConfigService {
  private appConfig: IConfig;

  get AppConfig() {
    return this.appConfig;
  }

  set AppConfig(value) {
    this.appConfig = value;
  }

  constructor(private httpClient: HttpClient) {}

  getSetting() {
    this.httpClient.get("./assets/config.json").subscribe((d: IConfig) => {
      this.appConfig = d;
    });
  }
}
