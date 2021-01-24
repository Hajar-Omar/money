import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _selectedBudget = new BehaviorSubject<string>(null);

  public get selectedBudget() {
    return this._selectedBudget;
  }

  public setSelectedBudget(value: string) {
    this._selectedBudget.next(value)
  }

  constructor() { }
}
