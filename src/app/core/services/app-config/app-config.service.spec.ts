import { TestBed } from "@angular/core/testing";
import { TestingModule } from "src/app/testing/testing.module";

import { AppConfigService } from "./app-config.service";

describe("AppConfigService", () => {
  let service: AppConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [TestingModule] });
    service = TestBed.get(AppConfigService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("getAppConfig() to return exact data", async () => {
    service.getSetting();
    setTimeout(() => {
      expect(service.AppConfig.baseUrl).toEqual(
        "https://api.youneedabudget.com/v1/"
      );
    }, 1000);
  });
});
