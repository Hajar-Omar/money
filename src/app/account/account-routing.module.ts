import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountDetailsComponent } from "./account-details/account-details.component";
import { AccountListComponent } from "./account-list/account-list.component";
import { AuthGuard } from "../core/guards/auth.guard";
import { PayeeComponent } from "./payee/payee.component";

const routes: Routes = [
  {
    path: ":budgetId",
    component: AccountListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ":budgetId/:accountId",
    component: AccountDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "payee/:budgetId/:payeeId",
    component: PayeeComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
