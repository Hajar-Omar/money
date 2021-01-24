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
  currency_format: {
    iso_code: string;
    example_format: string;
    decimal_digits: number;
    decimal_separator: string;
    symbol_first: boolean;
    group_separator: string;
    currency_symbol: string;
    display_symbol: boolean;
  };
  accounts?: [
    {
      id: string;
      name: string;
      type: string;
      on_budget: boolean;
      closed: boolean;
      note: string;
      balance: number;
      cleared_balance: number;
      uncleared_balance: number;
      transfer_payee_id: string;
      deleted: boolean;
    }
  ];
}
