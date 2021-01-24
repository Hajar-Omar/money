import { IAccount } from "./account";
import { ICategory } from "./category";
import { IPayee, IPayeeLocation } from "./payee";
import {
  IScheduledSubTransaction,
  IScheduledTransaction,
  ISubTransaction,
  ITransaction,
} from "./transaction";

export interface ICurrenceyFormat {
  iso_code: string;
  example_format: string;
  decimal_digits: number;
  decimal_separator: string;
  symbol_first: boolean;
  group_separator: string;
  currency_symbol: string;
  display_symbol: boolean;
}

export interface IBudgetDetails {
  data: {
    budget: {
      id: string;
      name: string;
      last_modified_on: string;
      first_month: string;
      last_month: string;
      date_format: {
        format: string;
      };
      currency_format: ICurrenceyFormat;
      accounts: IAccount[];
      payees: IPayee[];
      payee_locations: IPayeeLocation[];
      category_groups: [
        {
          id: string;
          name: string;
          hidden: boolean;
          deleted: boolean;
        }
      ];
      categories: ICategory[];
      months: [
        {
          month: string;
          note: string;
          income: number;
          budgeted: number;
          activity: number;
          to_be_budgeted: number;
          age_of_money: number;
          deleted: boolean;
          categories: ICategory[];
        }
      ];
      transactions: ITransaction[];
      subtransactions: ISubTransaction[];
      scheduled_transactions: IScheduledTransaction[];
      scheduled_subtransactions: IScheduledSubTransaction[];
    };
    server_knowledge: number;
  };
}
