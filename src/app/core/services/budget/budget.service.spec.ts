import { HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { budgetByIdMock } from "src/app/testing/mock-data/budgetById.mock";
import { budgetDetailsMock } from "src/app/testing/mock-data/budgetDetails.mock";
import { budgetsMock } from "src/app/testing/mock-data/budgets.mock";
import { categoryDetailsMock } from "src/app/testing/mock-data/categoryDetails.mock";
import { TestingModule } from "src/app/testing/testing.module";
import { AppConfigService } from "../app-config/app-config.service";

import { BudgetService } from "./budget.service";

describe("BudgetService", () => {
  let appConfigService: AppConfigService;
  let service: BudgetService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [TestingModule] });

    appConfigService = TestBed.get(AppConfigService);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(BudgetService);

    // set base url
    appConfigService.AppConfig = {
      baseUrl: "https://api.youneedabudget.com/v1/",
      token: "",
    };
  });

  // verify that there are no pending HTTP requests.
  afterEach(() => {
    httpTestingController.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("getAllBudgets() to return exact data", () => {
    let include_accounts = false;

    service.getAllBudgets(include_accounts).subscribe((d) => {
      expect(d.data.budgets[0].name).toEqual("My Budget");
      expect(d.data.budgets[0].id).toEqual(
        "dbaf8f6e-aa1f-471d-813c-4b5f187cddb7"
      );
    });

    const res = httpTestingController.expectOne(
      "https://api.youneedabudget.com/v1/budgets?include_accounts=false"
    );
    expect(res.request.method).toEqual("GET");
    res.flush(budgetsMock);
  });

  it("getCategoriesByBudgetId() to return exact data", () => {
    let budgetId = "dbaf8f6e-aa1f-471d-813c-4b5f187cddb7";

    service.getCategoriesByBudgetId(budgetId).subscribe((d) => {
      expect(d.data.category_groups[0].name).toEqual(
        "Internal Master Category"
      );
      expect(d.data.category_groups[0].categories.length).toBe(1);
    });

    const res = httpTestingController.expectOne(
      `https://api.youneedabudget.com/v1/budgets/${budgetId}/categories`
    );
    expect(res.request.method).toEqual("GET");
    res.flush(budgetByIdMock);
  });

  it("getCategoriesByBudgetId() to return exact data", () => {
    let budgetId = "dbaf8f6e-aa1f-471d-813c-4b5f187cddb7";
    let categoryId = "cbc3d1df-5e95-4b7d-b874-288d795da8d5";

    service.getCategoryDetails(budgetId, categoryId).subscribe((d) => {
      expect(d.data.category.name).toEqual("df");
      expect(d.data.category.activity).toBe(0);
    });

    const res = httpTestingController.expectOne(
      `https://api.youneedabudget.com/v1/budgets/${budgetId}/categories/${categoryId}`
    );
    expect(res.request.method).toEqual("GET");
    res.flush(categoryDetailsMock);
  });

  it("getBudgetById() to return exact data", () => {
    let budgetId = "7b201abf-8380-4148-afa8-8935de0509db";

    service.getBudgetById(budgetId).subscribe((d) => {
      expect(d.data.budget.name).toEqual("second budget");
      expect(d.data.budget.accounts.length).toBe(1);
    });

    const res = httpTestingController.expectOne(
      `https://api.youneedabudget.com/v1/budgets/${budgetId}`
    );
    expect(res.request.method).toEqual("GET");
    res.flush(budgetDetailsMock);
  });
});
