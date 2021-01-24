import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { BudgetService } from "src/app/core/services/budget/budget.service";
import { TestingModule } from "src/app/testing/testing.module";
import { CategoryDetailsComponent } from "../category-details/category-details.component";

import { BudgetDetailsComponent } from "./budget-details.component";

describe("BudgetDetailsComponent", () => {
  let component: BudgetDetailsComponent;
  let fixture: ComponentFixture<BudgetDetailsComponent>;

  let budgetService: BudgetService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [BudgetDetailsComponent, CategoryDetailsComponent],
    }).compileComponents();

    budgetService = TestBed.get(BudgetService);
    activatedRoute = TestBed.get(ActivatedRoute);
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
