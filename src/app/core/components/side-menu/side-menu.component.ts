import { Component, Input, OnInit } from "@angular/core";
import { IAccount } from "../../models/account";
import { IBudgetDetails } from "../../models/budget-details";
import { SharedService } from "../../services/shared/shared.service";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"],
})
export class SideMenuComponent implements OnInit {
  budget: IBudgetDetails;

  constructor(public sharedService: SharedService) {
    this.sharedService.checkSelectedBudget();
    if (this.sharedService.isSelectedBudget) {
      this.budget = localStorage.getItem("budget")
        ? JSON.parse(localStorage.getItem("budget"))
        : [];
    }
  }

  ngOnInit() {}
}
