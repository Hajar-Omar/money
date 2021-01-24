import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { SharedService } from "./core/services/shared/shared.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "money";

  constructor(private router: Router, private sharedService: SharedService) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd && !e.url.endsWith("budget")) {
        this.sharedService.checkSelectedBudget();
      }
    });
  }
}
