import { ICategoryRes } from "src/app/core/models/category";

export const budgetByIdMock: ICategoryRes = {
  data: {
    category_groups: [
      {
        id: "6255a227-c7e7-429e-b201-2a4a5a3a6f15",
        name: "Internal Master Category",
        hidden: false,
        deleted: false,

        categories: [
          {
            id: "1afe379f-2f10-4d95-bc0f-624effdf7458",
            category_group_id: "6255a227-c7e7-429e-b201-2a4a5a3a6f15",
            name: "Inflows",
            hidden: false,
            original_category_group_id: null,
            note: null,
            budgeted: 0,
            activity: -52468990,
            balance: -52468990,
            goal_type: null,
            goal_creation_month: null,
            goal_target: 0,
            goal_target_month: null,
            goal_percentage_complete: null,
            deleted: false,
          },
        ],
      },
    ],
    server_knowledge: 124,
  },
};
