import { IAccountType } from "src/app/core/models/account";

export const accountTypesMock: IAccountType[] = [
  {
    disabled: false,
    name: "Budget",
    types: [
      {
        value: "checking",
        viewValue: "Checking",
      },
    ],
  },
];
