import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { AccountService } from "../core/services/account/account.service";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.scss"],
})
export class AccountListComponent implements OnInit {
  budgetId: string;

  displayedColumns: string[] = ["name", "type", "note", "balance"];

  dataSource = new MatTableDataSource([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loaded = false;

  constructor(
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute
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
}
