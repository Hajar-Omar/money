import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    // component: AppComponent,
    children: [
      {
        path: "bugdet",
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
        redirectTo: "bugdet",
        pathMatch: "full",
      },
    ],
  },
  { path: "notFound", component: NotFoundComponent },
  // Fallback when no prior routes is matched
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
