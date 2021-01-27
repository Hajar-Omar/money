import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { AppConfigService } from "src/app/core/services/app-config/app-config.service";
import { BudgetService } from "src/app/core/services/budget/budget.service";
import { SharedService } from "src/app/core/services/shared/shared.service";
import { TestingModule } from "src/app/testing/testing.module";
import { CategoryDetailsComponent } from "../category-details/category-details.component";

import { BudgetDetailsComponent } from "./budget-details.component";

describe("BudgetDetailsComponent", () => {
  let component: BudgetDetailsComponent;
  let fixture: ComponentFixture<BudgetDetailsComponent>;

  let budgetService: BudgetService;
  let appConfigService: AppConfigService;
  let sharedService: SharedService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [BudgetDetailsComponent, CategoryDetailsComponent],
      providers: [AppConfigService, SharedService, BudgetService],
    }).compileComponents();

    appConfigService = TestBed.get(AppConfigService);
    budgetService = TestBed.get(BudgetService);
    sharedService = TestBed.get(SharedService);

    // set base url
    appConfigService.AppConfig = {
      baseUrl: "https://api.youneedabudget.com/v1/",
      token: "",
    };
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
