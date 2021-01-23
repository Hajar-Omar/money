import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BudgetRoutingModule } from "./budget-routing.module";
import { BudgetListComponent } from "./components/budget-list/budget-list.component";

@NgModule({
  declarations: [BudgetListComponent],
  imports: [CommonModule, BudgetRoutingModule],
})
export class BudgetModule {}
