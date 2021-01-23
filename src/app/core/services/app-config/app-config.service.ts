import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IConfig } from "../../models/config";

@Injectable({
  providedIn: "root",
})
export class AppConfigService {
  private appConfig: IConfig;

  get getAppConfig() {
    return this.appConfig;
  }

  constructor(private httpClient: HttpClient) {}

  getSetting() {
    this.httpClient.get("./assets/config.json").subscribe((d: IConfig) => {
      this.appConfig = d;
    });
  }
}
