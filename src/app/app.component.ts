import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { IBudgetDetails } from "./core/models/budget-details";
import { SharedService } from "./core/services/shared/shared.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "money";

  budget: IBudgetDetails;

  constructor(private router: Router, private sharedService: SharedService) {
    // on change route , check selected route
    this.router.events.subscribe((e) => {
      if (
        e instanceof NavigationEnd &&
        !e.url.endsWith("budget") &&
        e.url.length !== 1 // "/"
      )
        this.sharedService.checkSelectedBudget();
    });

    // on change selected budget
    this.sharedService.selectedBudget.subscribe((d) => {
      this.budget = d;
      this.sharedService.checkSelectedBudget();
    });
  }
}
