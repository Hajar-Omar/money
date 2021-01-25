import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { MatDialog } from "@angular/material";
import { CreateAccountComponent } from "src/app/account/dialogs/create-account/create-account.component";
import { IAccount } from "../../models/account";
import { IBudgetDetails } from "../../models/budget-details";
import { SharedService } from "../../services/shared/shared.service";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"],
})
export class SideMenuComponent implements OnInit, OnChanges {
  @Input("budget") budget: IBudgetDetails;

  accountsBudget: IAccount[] = [];
  accountsTraking: IAccount[] = [];

  constructor(public sharedService: SharedService, private dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.budget) {
      this.accountsBudget = this.budget.data.budget.accounts.filter(
        (e) => e.on_budget == true
      );
      this.accountsTraking = this.budget.data.budget.accounts.filter(
        (e) => e.on_budget == false
      );
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateAccountComponent, {
      width: "500px",
      data: {
        budgetId: this.budget.data.budget.id,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {});
  }

  ngOnInit() {}
}
