import { Component, OnInit } from "@angular/core";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { AccountService } from "../../core/services/account/account.service";
import { CreateAccountComponent } from "../dialogs/create-account/create-account.component";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.scss"],
})
export class AccountListComponent implements OnInit {
  budgetId: string;

  displayedColumns: string[] = ["name", "type", "note", "outflow","inflow"];
  dataSource = new MatTableDataSource([]);

  loaded = false;

  constructor(
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.budgetId = this.activatedRoute.snapshot.params["budgetId"];
    this.loadAccounts();
  }

  ngOnInit() {}

  loadAccounts() {
    this.loaded = false;
    this.dataSource.data = [];

    this.accountService.getAccounts(this.budgetId).subscribe((d) => {
      this.dataSource.data = d.data.accounts
        .filter((e) => e.deleted == false)
        .sort((a, b) => b.balance - a.balance);
      this.loaded = true;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateAccountComponent, {
      width: "500px",
      data: {
        budgetId: this.budgetId,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.loadAccounts();
    });
  }
}
