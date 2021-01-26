import { Component, Inject, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  MatDialogRef,
  MatRadioChange,
  MatSnackBar,
  MAT_DIALOG_DATA,
} from "@angular/material";
import { openSnackBar } from "src/app/core/helpers/snackBar";
import { IAccountNew, IAccountType } from "src/app/core/models/account";
import { Months } from "src/app/core/models/months";
import { AccountService } from "src/app/core/services/account/account.service";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.scss"],
})
export class CreateAccountComponent implements OnInit {
  accountForm: FormGroup;

  types: IAccountType[] = [];

  step = 1;
  success = false;

  selectedPlan: MatRadioChange;

  months: string[] = Months;
  years: number[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private matSnackBar: MatSnackBar
  ) {
    this.loadAccountTypes();

    this.accountForm = this.formBuilder.group({
      type: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      balance: new FormControl("", [Validators.required]),
    });

    //calculate years
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < 10; i++) this.years.push(currentYear++);
  }

  ngOnInit() {}

  onNoClick(e?: object): void {
    this.dialogRef.close(e ? true : false);
  }

  loadAccountTypes() {
    this.accountService.getAccountTypes().subscribe((d) => (this.types = d));
  }

  next(notCredit: boolean): void {
    if (notCredit) {
      // other types
      this.saveAccount();
    } else {
      // credit type
      this.step = 2;
    }
  }

  saveAccount() {
    let account: IAccountNew = {
      type: this.accountForm.get("type").value,
      name: this.accountForm.get("name").value,
      balance: Number(this.accountForm.get("balance").value),
    };

    this.step = null;

    this.accountService.postAccount(this.data["budgetId"], account).subscribe(
      (d) => {
        this.success = true;
        openSnackBar(this.matSnackBar, "Account is created Successfully", true);
      },
      (e) => {
        this.onNoClick();
        this.success = false;
        openSnackBar(
          this.matSnackBar,
          "Account is not created Successfully, try again later!",
          false
        );
      }
    );
  }

  addAnother() {
    this.accountForm.reset();
    this.success = false;
    this.step = 1;
  }

  changePlanForCredit() {
    switch (this.selectedPlan.value) {
      case "1":
        this.step++;
        break;
      case "2": // later > skip step
        this.step += 2;
        break;
      case "3": // skip > go to success
        this.success = true;
        this.saveAccount();
        break;
      default:
        break;
    }
  }
}
