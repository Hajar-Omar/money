import { HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { accountMock } from "src/app/testing/mock-data/accountDetails.mock";
import { accountsListMock } from "src/app/testing/mock-data/accountList.mock";
import { accountTypesMock } from "src/app/testing/mock-data/accountTypes.mock";
import { TestingModule } from "src/app/testing/testing.module";
import { AppConfigService } from "../app-config/app-config.service";

import { AccountService } from "./account.service";

describe("AccountService", () => {
  let appConfigService: AppConfigService;
  let httpTestingController: HttpTestingController;
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [TestingModule] });

    appConfigService = TestBed.get(AppConfigService);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(AccountService);

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

  it("getAccounts() to return exact data", () => {
    let budgetId = "7b201abf-8380-4148-afa8-8935de0509db";

    service.getAccounts(budgetId).subscribe((d) => {
      expect(d.data.accounts[0].name).toEqual("test account");
      expect(d.data.accounts.length).toBe(1);
    });

    const res = httpTestingController.expectOne(
      `https://api.youneedabudget.com/v1/budgets/${budgetId}/accounts`
    );
    expect(res.request.method).toEqual("GET");
    res.flush(accountsListMock);
  });

  it("getAccountById() to return exact data", () => {
    let budgetId = "7b201abf-8380-4148-afa8-8935de0509db";
    let accountId = "fbf45ffe-1b29-41f3-a6e5-f0b8d8a9d2ae";

    service.getAccountById(budgetId, accountId).subscribe((d) => {
      expect(d.data.account.type).toEqual("cash");
      expect(d.data.account.cleared_balance).toBe(4320);
    });

    const res = httpTestingController.expectOne(
      `https://api.youneedabudget.com/v1/budgets/${budgetId}/accounts/${accountId}`
    );
    expect(res.request.method).toEqual("GET");
    res.flush(accountMock);
  });

  it("getAccountTypes() to return exact data", () => {
    service.getAccountTypes().subscribe((d) => {
      expect(d[0].name).toEqual("Budget");
      expect(d.length).toBe(1);
    });

    const res = httpTestingController.expectOne(
      "assets/data/account-types.json"
    );
    expect(res.request.method).toEqual("GET");
    res.flush(accountTypesMock);
  });
});
