import { IAccount } from "./account";
import { ICurrenceyFormat } from "./budget-details";

export interface IBudgetListRes {
  data: {
    budgets: IBudget[];
    default_budget: IBudget;
  };
}

export interface IBudget {
  id: string;
  name: string;
  last_modified_on: string;
  first_month: string;
  last_month: string;
  date_format: {
    format: string;
  };
  currency_format: ICurrenceyFormat;
  accounts?: IAccount[];
}
