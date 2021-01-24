import { TestBed, async, inject } from "@angular/core/testing";
import { TestingModule } from "src/app/testing/testing.module";
import { AppConfigService } from "../services/app-config/app-config.service";

import { AuthGuard } from "./auth.guard";

describe("AuthGuard", () => {
  let authGuard: AuthGuard;
  let appConfigService: AppConfigService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [AuthGuard, AppConfigService],
    });
    authGuard = TestBed.get(AuthGuard);
    appConfigService = TestBed.get(AppConfigService);

    // set base url
    appConfigService.AppConfig = {
      baseUrl: "https://api.youneedabudget.com/v1/",
      token: "",
    };
  }));

  it("should ...", inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
