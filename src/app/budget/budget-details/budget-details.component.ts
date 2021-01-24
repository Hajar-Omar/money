import { SelectionModel } from "@angular/cdk/collections";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { slide } from "src/app/core/animations/slide";
import { ICateBudget, ICategoryGroup } from "src/app/core/models/category";
import { BudgetService } from "src/app/core/services/budget/budget.service";

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
  selection = new SelectionModel<ICategoryGroup>(true, []);
  columnsToDisplay = ["select", "name", "budgeted", "activity", "available"];
  expandedElement: ICategoryGroup | null;

  selectedCategory: ICateBudget;

  constructor(
    private budgetService: BudgetService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.loadCategories();
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

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSource.data.forEach((row) => this.selection.select(row));
    }
  }
}
