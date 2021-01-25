import { Component, Input, OnInit } from "@angular/core";
import { IBudgetDetails } from "../../models/budget-details";
import { SharedService } from "../../services/shared/shared.service";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"],
})
export class SideMenuComponent implements OnInit {
  @Input("budget") budget: IBudgetDetails;

  constructor(public sharedService: SharedService) {}

  ngOnInit() {}
}
