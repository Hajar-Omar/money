import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IBudget } from "src/app/core/models/budget";
import { BudgetService } from "src/app/core/services/budget/budget.service";
import { SharedService } from "src/app/core/services/shared/shared.service";

@Component({
  selector: "app-budget-list",
  templateUrl: "./budget-list.component.html",
  styleUrls: ["./budget-list.component.scss"],
})
export class BudgetListComponent implements OnInit {
  budgets: IBudget[] = [];

  constructor(
    private budgetService: BudgetService,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.loadBudgets();
  }

  ngOnInit() {}

  loadBudgets() {
    this.budgetService.getAllBudgets(false).subscribe((d) => {
      this.budgets = d.data.budgets;
    });
  }

  changeBudget(budgetId: string) {
    this.router.navigate(["budget", budgetId]);
    this.sharedService.setSelectedBudget(budgetId);
  }
}
