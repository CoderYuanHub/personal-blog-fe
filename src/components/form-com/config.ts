import { CustomSelect } from "@/components/form-com-item";
import type { InputProps, ISelectProps, SwitchProps } from "element-plus";

export const formItemMap = {
  input: "el-input",
  select: CustomSelect,
  switch: "el-switch"
};

export type SchemaAttrsType = {
  input: Partial<InputProps>;
  select: Partial<ISelectProps>;
  switch: Partial<SwitchProps>;
};
