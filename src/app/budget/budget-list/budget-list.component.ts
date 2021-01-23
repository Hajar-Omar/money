import { Component, OnInit } from "@angular/core";
import { IBudget } from "src/app/core/models/budget";
import { BudgetService } from "src/app/core/services/budget/budget.service";

@Component({
  selector: "app-budget-list",
  templateUrl: "./budget-list.component.html",
  styleUrls: ["./budget-list.component.scss"],
})
export class BudgetListComponent implements OnInit {
  budgets: IBudget[] = [];

  constructor(private budgetService: BudgetService) {
    this.loadBudgets();
  }

  ngOnInit() {}

  loadBudgets() {
    this.budgetService.getAllBudgets(false).subscribe((d) => {
      this.budgets = d.data.budgets;
    });
  }
}
