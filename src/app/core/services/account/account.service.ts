import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConfigService } from "../app-config/app-config.service";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor(
    private appConfigService: AppConfigService,
    private httpClient: HttpClient
  ) {}
}
