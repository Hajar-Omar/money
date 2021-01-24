export interface IPayee {
  id: string;
  name: string;
  transfer_account_id: string;
  deleted: boolean;
}
export interface IPayeeLocation {
  id: string;
  payee_id: string;
  latitude: string;
  longitude: string;
  deleted: boolean;
}

export interface IPayeeRes {
  data: {
    payee: IPayee;
  };
}
