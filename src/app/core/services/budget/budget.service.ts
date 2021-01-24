import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IBudgetListRes } from "../../models/budget";
import { ICateBudget, ICategoryRes } from "../../models/category";
import { AppConfigService } from "../app-config/app-config.service";

@Injectable({
  providedIn: "root",
})
export class BudgetService {
  constructor(
    private httpClient: HttpClient,
    private appConfigService: AppConfigService
  ) {}

  getAllBudgets(include_accounts: boolean): Observable<IBudgetListRes> {
    return this.httpClient.get<IBudgetListRes>(
      `${this.appConfigService.AppConfig.baseUrl}budgets?include_accounts=${include_accounts}`
    );
  }

  getCategoriesByBudgetId(budgetId: string): Observable<ICategoryRes> {
    return this.httpClient.get<ICategoryRes>(
      `${this.appConfigService.AppConfig.baseUrl}budgets/${budgetId}/categories`
    );
  }

  getCategoryDetails(
    budgetId: string,
    categoryId: string
  ): Observable<ICateBudget> {
    return this.httpClient.get<ICateBudget>(
      `${this.appConfigService.AppConfig.baseUrl}budgets/${budgetId}/categories/${categoryId}`
    );
  }
}
