import { IAccountListRes } from "src/app/core/models/account";

export const accountsListMock: IAccountListRes = {
  data: {
    accounts: [
      {
        id: "fbf45ffe-1b29-41f3-a6e5-f0b8d8a9d2ae",
        name: "test account",
        type: "cash",
        on_budget: true,
        closed: false,
        note: null,
        balance: 4320,
        cleared_balance: 4320,
        uncleared_balance: 0,
        transfer_payee_id: "e6f80dac-67fc-4b3b-a570-a8941eca9e30",
        deleted: false,
      },
    ],
    server_knowledge: 48,
  },
};
