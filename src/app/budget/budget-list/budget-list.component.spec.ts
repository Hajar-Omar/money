import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { IBudgetListRes } from "src/app/core/models/budget";
import { AppConfigService } from "src/app/core/services/app-config/app-config.service";
import { BudgetService } from "src/app/core/services/budget/budget.service";
import { SharedService } from "src/app/core/services/shared/shared.service";
import { budgetsMock } from "src/app/testing/mock-data/budgets.mock";
import { TestingModule } from "src/app/testing/testing.module";

import { BudgetListComponent } from "./budget-list.component";

describe("BudgetListComponent", () => {
  let component: BudgetListComponent;
  let fixture: ComponentFixture<BudgetListComponent>;

  let budgetService: BudgetService;
  let sharedService: SharedService;
  let appConfigService: AppConfigService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [BudgetService, SharedService, AppConfigService],
      declarations: [BudgetListComponent],
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
    fixture = TestBed.createComponent(BudgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("getAllBudgets() to work correctly", fakeAsync(() => {
    const response: IBudgetListRes = budgetsMock;

    spyOn(budgetService, "getAllBudgets").and.returnValue(
      of(response).pipe(delay(1))
    );

    // Trigger ngOnInit()
    fixture.detectChanges();
    expect(component.budgets.length).toEqual(0);

    // Act
    component.loadBudgets();

    // Simulates the asynchronous passage of time
    tick(1);
    expect(component.budgets).toEqual(response.data.budgets);
  }));
});
