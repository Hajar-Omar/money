import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "budget",
        loadChildren: () =>
          import("./budget/budget.module").then((m) => m.BudgetModule),
      },
      {
        path: "account",
        loadChildren: () =>
          import("./account/account.module").then((m) => m.AccountModule),
      },
      {
        path: "",
        redirectTo: "budget",
        pathMatch: "full",
      },
    ],
    runGuardsAndResolvers: 'always'
  },
  { path: "notFound", component: NotFoundComponent },
  // Fallback when no prior routes is matched
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {onSameUrlNavigation: 'reload',})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
