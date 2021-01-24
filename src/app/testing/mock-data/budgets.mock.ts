import { IBudgetListRes } from "src/app/core/models/budget";

export const budgetsMock: IBudgetListRes = {
  data: {
    budgets: [
      {
        id: "dbaf8f6e-aa1f-471d-813c-4b5f187cddb7",
        name: "My Budget",
        last_modified_on: "2021-01-24T06:36:34+00:00",
        first_month: "2021-01-01",
        last_month: "2021-01-01",
        date_format: { format: "MM/DD/YYYY" },
        currency_format: {
          iso_code: "USD",
          example_format: "123,456.78",
          decimal_digits: 2,
          decimal_separator: ".",
          symbol_first: true,
          group_separator: ",",
          currency_symbol: "$",
          display_symbol: true,
        },
      },
    ],
    default_budget: null,
  },
};
