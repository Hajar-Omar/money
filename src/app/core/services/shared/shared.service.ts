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
    // before get, check if there is a selected budget in the storage
    if (localStorage.getItem("budget") != null)
      this.setSelectedBudget(JSON.parse(localStorage.getItem("budget")));
    return this._selectedBudget;
  }

  public setSelectedBudget(value?: IBudgetDetails) {
    this.isSelectedBudget = value ? true : false;

    if (value) localStorage.setItem("budget", JSON.stringify(value));
    else localStorage.removeItem("budget");

    this._selectedBudget.next(value);
    this.checkSelectedBudget();
  }

  checkSelectedBudget() {
    this.isSelectedBudget =
      localStorage.getItem("budget") != null ? true : false;
  }

  constructor() {}
}
