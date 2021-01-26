import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { slide } from "src/app/core/animations/slide";
import { IMonth } from "src/app/core/models/budget-details";
import { ICateBudget, ICategoryGroup } from "src/app/core/models/category";
import { BudgetService } from "src/app/core/services/budget/budget.service";
import { SharedService } from "src/app/core/services/shared/shared.service";

@Component({
  selector: "app-budget-details",
  templateUrl: "./budget-details.component.html",
  styleUrls: ["./budget-details.component.scss"],
  animations: [slide],
})
export class BudgetDetailsComponent implements OnInit {
  id: string;

  isLoading = true;

  dataSource = new MatTableDataSource<ICategoryGroup>();

  selectedCategory: ICateBudget;

  months: IMonth[] = [];
  selectedMonth = 0;

  constructor(
    private budgetService: BudgetService,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService
  ) {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.loadCategories();

    this.sharedService.selectedBudget.subscribe((d) => {
      if (d) this.months = d.data.budget.months;
    });
  }

  ngOnInit() {}

  loadCategories() {
    this.budgetService.getCategoriesByBudgetId(this.id).subscribe((d) => {
      this.isLoading = false;
      this.dataSource.data = d.data.category_groups;
    });
  }

  loadCateDetails(categoryId: string) {
    this.budgetService
      .getCategoryDetails(this.id, categoryId)
      .subscribe((d) => (this.selectedCategory = d));
  }
}
