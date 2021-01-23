import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { BudgetDetailsComponent } from "./budget-details/budget-details.component";
import { BudgetListComponent } from "./budget-list/budget-list.component";

const routes: Routes = [
  {
    path: "",
    component: BudgetListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ":id",
    component: BudgetDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetRoutingModule {}
