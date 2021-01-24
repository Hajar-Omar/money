import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IBudgetDetails } from "../../models/budget-details";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  isSelectedBudget = false;
  private _selectedBudget = new BehaviorSubject<IBudgetDetails>(null);

  public get selectedBudget() {
    return this._selectedBudget;
  }

  public setSelectedBudget(value: IBudgetDetails) {
    this.isSelectedBudget = value ? true : false;
    localStorage.setItem("budget", JSON.stringify(value));
    this._selectedBudget.next(value);
  }

  constructor() {}

  checkSelectedBudget() {
    this.isSelectedBudget = localStorage.getItem("budget") ? true : false;
  }
}
