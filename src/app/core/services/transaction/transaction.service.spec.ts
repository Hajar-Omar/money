import { HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { payeesByIdMock } from "src/app/testing/mock-data/payeesById.mock";
import { transactionsByIdMock } from "src/app/testing/mock-data/transactionsById.mock";
import { TestingModule } from "src/app/testing/testing.module";
import { AppConfigService } from "../app-config/app-config.service";

import { TransactionService } from "./transaction.service";

describe("TransactionService", () => {
  let appConfigService: AppConfigService;
  let httpTestingController: HttpTestingController;
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [TestingModule] });

    appConfigService = TestBed.get(AppConfigService);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(TransactionService);

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

  it("getTransactionByAccountId() to return exact data", () => {
    let budgetId = "7b201abf-8380-4148-afa8-8935de0509db";
    let accountId = "fbf45ffe-1b29-41f3-a6e5-f0b8d8a9d2ae";

    service.getTransactionByAccountId(budgetId, accountId).subscribe((d) => {
      expect(d.data.transactions[0].payee_name).toEqual("Starting Balance");
      expect(d.data.transactions[0].category_name).toEqual(
        "Immediate Income SubCategory"
      );
    });

    const res = httpTestingController.expectOne(
      `https://api.youneedabudget.com/v1/budgets/${budgetId}/accounts/${accountId}/transactions`
    );
    expect(res.request.method).toEqual("GET");
    res.flush(transactionsByIdMock);
  });

  it("getTransactionsPayees() to return exact data", () => {
    let budgetId = "7b201abf-8380-4148-afa8-8935de0509db";
    let payeeId = "afc6d13c-19df-45dc-923e-8b58a4fa2ef6";

    service.getTransactionsPayees(budgetId, payeeId).subscribe((d) => {
      expect(d.data.transactions[0].account_name).toEqual("test account");
      expect(d.data.transactions[0].category_name).toEqual(
        "Immediate Income SubCategory"
      );
    });

    const res = httpTestingController.expectOne(
      `https://api.youneedabudget.com/v1/budgets/${budgetId}/payees/${payeeId}/transactions`
    );
    expect(res.request.method).toEqual("GET");
    res.flush(payeesByIdMock);
  });
});
