import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { IAccountDetails } from "src/app/core/models/account";
import { TransactionService } from "src/app/core/services/transaction/transaction.service";
import { AccountService } from "../../core/services/account/account.service";

@Component({
  selector: "app-account-details",
  templateUrl: "./account-details.component.html",
  styleUrls: ["./account-details.component.scss"],
})
export class AccountDetailsComponent implements OnInit {
  budgetId: string;
  accountId: string;

  accountDetails: IAccountDetails;

  displayedColumns: string[] = [
    "account_name",
    "date",
    "payee_name",
    "category_name",
    "memo",
    "amount",
    "inflow",
  ];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private transactionService: TransactionService
  ) {
    this.budgetId = this.activatedRoute.snapshot.params["budgetId"];
    this.accountId = this.activatedRoute.snapshot.params["accountId"];

    this.loadAccountDetails();
    this.loadTransactionsAccount();
  }

  ngOnInit() {}

  loadAccountDetails() {
    this.accountService
      .getAccountById(this.budgetId, this.accountId)
      .subscribe((d) => (this.accountDetails = d));
  }

  loadTransactionsAccount() {
    this.dataSource.data = [];
    this.transactionService
      .getTransactionByAccountId(this.budgetId, this.accountId)
      .subscribe((d) => {
        this.dataSource.data = d.data.transactions.sort(
          (a, b) => a.amount - b.amount
        );
      });
  }
}
