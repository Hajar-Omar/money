import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  IAccountDetails,
  IAccountListRes,
  IAccountNew,
} from "../../models/account";
import { AppConfigService } from "../app-config/app-config.service";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor(
    private appConfigService: AppConfigService,
    private httpClient: HttpClient
  ) {}

  getAccounts(budgetId: string): Observable<IAccountListRes> {
    return this.httpClient.get<IAccountListRes>(
      `${this.appConfigService.AppConfig.baseUrl}budgets/${budgetId}/accounts`
    );
  }

  getAccountById(
    budgetId: string,
    accountId: string
  ): Observable<IAccountDetails> {
    return this.httpClient.get<IAccountDetails>(
      `${this.appConfigService.AppConfig.baseUrl}budgets/${budgetId}/accounts/${accountId}`
    );
  }

  postAccount(budgetId: string, account: IAccountNew) {
    return this.httpClient.post<IAccountDetails>(
      `${this.appConfigService.AppConfig.baseUrl}budgets/${budgetId}/accounts`,
      { account }
    );
  }
}
