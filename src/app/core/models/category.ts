export interface ICategoryRes {
  data: {
    category_groups: ICategoryGroup[];
    server_knowledge: number;
  };
}
export interface ICategoryGroup {
  id: string;
  name: string;
  hidden: boolean;
  deleted: boolean;
  categories: ICategory[];
}

export interface ICategory {
  id: string;
  category_group_id: string;
  name: string;
  hidden: boolean;
  original_category_group_id: string;
  note: string;
  budgeted: number;
  activity: number;
  balance: number;
  goal_type: string;
  goal_creation_month: string;
  goal_target: number;
  goal_target_month: string;
  goal_percentage_complete: number;
  deleted: boolean;
}
 
export interface ICateBudget {
  data: {
    category: {
      id: string;
      category_group_id: string;
      name: string;
      hidden: boolean;
      original_category_group_id: string;
      note: string;
      budgeted: number;
      activity: number;
      balance: number;
      goal_type: "TB";
      goal_creation_month: string;
      goal_target: number;
      goal_target_month: string;
      goal_percentage_complete: number;
      deleted: boolean;
    };
  };
}
