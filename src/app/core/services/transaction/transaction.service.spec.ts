import { HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
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
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
