import { HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
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
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
