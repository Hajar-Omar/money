import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BudgetRoutingModule } from "./budget-routing.module";
import { BudgetListComponent } from "./budget-list/budget-list.component";
import { SharedModule } from "../shared/shared.module";
import { BudgetDetailsComponent } from "./budget-details/budget-details.component";
import { CategoryDetailsComponent } from "./category-details/category-details.component";

@NgModule({
  declarations: [
    BudgetListComponent,
    BudgetDetailsComponent,
    CategoryDetailsComponent,
  ],
  imports: [CommonModule, BudgetRoutingModule, SharedModule],
})
export class BudgetModule {}
