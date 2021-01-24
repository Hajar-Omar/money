export interface IAccount {
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

export interface IAccountListRes {
  data: {
    accounts: IAccount[];
    server_knowledge: number;
  };
}

export interface IAccountDetails {
  data: {
    account: IAccount;
  };
}

export interface IAccountNew {
  name: string;
  type: string;
  balance: number;
}
