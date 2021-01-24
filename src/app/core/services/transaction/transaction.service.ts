import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITransactionList } from "../../models/transaction";
import { AppConfigService } from "../app-config/app-config.service";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  constructor(
    private appConfigService: AppConfigService,
    private httpClient: HttpClient
  ) {}

  getTransactionByAccountId(
    budgetId: string,
    accountId: string
  ): Observable<ITransactionList> {
    return this.httpClient.get<ITransactionList>(
      `${this.appConfigService.AppConfig.baseUrl}budgets/${budgetId}/accounts/${accountId}/transactions`
    );
  }
}
