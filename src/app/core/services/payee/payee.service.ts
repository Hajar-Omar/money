import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPayeeRes } from "../../models/payee";
import { AppConfigService } from "../app-config/app-config.service";

@Injectable({
  providedIn: "root",
})
export class PayeeService {
  constructor(
    private httpClient: HttpClient,
    private appConfigService: AppConfigService
  ) {}

  getPayeeById(budgetId: string, payeeId: string): Observable<IPayeeRes> {
    return this.httpClient.get<IPayeeRes>(
      `${this.appConfigService.AppConfig.baseUrl}budgets/${budgetId}/payees/${payeeId}`
    );
  }
}
