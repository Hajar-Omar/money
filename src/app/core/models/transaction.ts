export interface ITransaction {
  id: string;
  date: string;
  amount: number;
  memo: string;
  cleared: string;
  approved: boolean;
  flag_color: string;
  account_id: string;
  payee_id: string;
  category_id: string;
  transfer_account_id: string;
  transfer_transaction_id: string;
  matched_transaction_id: string;
  import_id: string;
  deleted: boolean;
}

export interface ISubTransaction {
  id: string;
  transaction_id: string;
  amount: number;
  memo: string;
  payee_id: string;
  payee_name: string;
  category_id: string;
  category_name: string;
  transfer_account_id: string;
  transfer_transaction_id: string;
  deleted: boolean;
}

export interface IScheduledTransaction {
  id: string;
  date_first: string;
  date_next: string;
  frequency: string;
  amount: number;
  memo: string;
  flag_color: string;
  account_id: string;
  payee_id: string;
  category_id: string;
  transfer_account_id: string;
  deleted: boolean;
}

export interface IScheduledSubTransaction {
  id: string;
  scheduled_transaction_id: string;
  amount: number;
  memo: string;
  payee_id: string;
  category_id: string;
  transfer_account_id: string;
  deleted: boolean;
}
