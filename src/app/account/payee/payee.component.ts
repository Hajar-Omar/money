import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { TransactionService } from "src/app/core/services/transaction/transaction.service";

@Component({
  selector: "app-payee",
  templateUrl: "./payee.component.html",
  styleUrls: ["./payee.component.scss"],
})
export class PayeeComponent implements OnInit {
  budgetId: string;
  payeeId: string;

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

  loaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private transactionService: TransactionService
  ) {
    this.budgetId = this.activatedRoute.snapshot.params["budgetId"];
    this.payeeId = this.activatedRoute.snapshot.params["payeeId"];

    this.loadPayeeTransactions();
  }

  ngOnInit() {}

  loadPayeeTransactions() {
    this.transactionService
      .getTransactionsPayees(this.budgetId, this.payeeId)
      .subscribe((d) => {
        this.dataSource.data = d.data.transactions;
      });
  }
}
