import { HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { budgetsMock } from "src/app/testing/mock-data/budgets.mock";
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

    setTimeout(() => { //  TODO
    service.getAllBudgets(include_accounts).subscribe((d) => {
      expect(d.data.budgets[0].name).toEqual("My Budget");
      expect(d.data.budgets[0].id).toEqual(
        "dbaf8f6e-aa1f-471d-813c-4b5f187cddb7"
      );
    });

    const res = httpTestingController.expectOne("assets/data/budgets.json");
    expect(res.request.method).toEqual("GET");
    res.flush(budgetsMock);
    }, 2000);
  });
});
