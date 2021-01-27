import { ITransactionList } from "src/app/core/models/transaction";

export const payeesByIdMock: ITransactionList = {
  data: {
    transactions: [
      {
        type: "transaction",
        parent_transaction_id: null,
        id: "e7d04908-6123-456c-b8dd-187c71e495e5",
        date: "2021-01-25",
        amount: 4324,
        memo: null,
        cleared: "cleared",
        approved: true,
        flag_color: null,
        account_id: "fbf45ffe-1b29-41f3-a6e5-f0b8d8a9d2ae",
        account_name: "test account",
        payee_id: "afc6d13c-19df-45dc-923e-8b58a4fa2ef6",
        payee_name: "Starting Balance",
        category_id: "2fc6e4f2-8951-43ba-9602-58c492fb5be6",
        category_name: "Immediate Income SubCategory",
        transfer_account_id: null,
        transfer_transaction_id: null,
        matched_transaction_id: null,
        import_id: null,
        deleted: false,
      },
    ],
    server_knowledge: 48,
  },
};
