type TableHeaderItemAttrsType =
  | {
      prop: string;
      label: String;
      [attrs: string]: any;
    }
  | {
      type?: string;
      [attrs: string]: any;
    };

type TableHeaderItemType = {
  attrs: TableHeaderItemAttrsType;
  custom?: boolean;
  customHeader?: boolean;
};

export type TableHeaderType = TableHeaderItemType[];

export type TableDataType = Record<string, any>[];

/*
  const tableHeader = [
    { attrs: { type: "selection", width: "50", align: "center" } },
    { attrs: { prop: "order", label: "序号" }, custom: true },
    { attrs: { prop: "username", label: "用户名" } },
    { attrs: { prop: "password", label: "密码" } },
    { attrs: { prop: "coop", label: "操作" }, custom: true }
  ];
*/

/*
  const tableData = [
    { order: "1", username: "1", password: '1', coop: "1" },
    { order: "2", username: "2", password: '2', coop: "2" },
    { order: "3", username: "3", password: '3', coop: "3" }
  ];
*/
