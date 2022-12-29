import type { formItemMap, SchemaAttrsType } from "./config";
import type { FormItemProps } from "element-plus";

type SchemaComType = keyof typeof formItemMap;

export interface ISchema {
  component: SchemaComType;
  key: string;
  itemAttrs?: Partial<FormItemProps>;
  attrs?: SchemaAttrsType[SchemaComType];
}

export interface JFromCom {
  getFormData: () => Record<string, unknown>;
  setFormData: (key: string, value: unknown) => void;
  reset: () => void;
  validate: () => Promise<boolean>;
}

/*
  const schema = [
    {
      component: 'input',
      key: 'username',
      itemAttrs: {
        label: 'username'
      },
      attrs: {
        type: 'text'
      }
    },
    {
      component: 'input',
      key: 'password',
      itemAttrs: {
        label: 'password'
      },
      attrs: {
        type: 'password',
        showPassword: true
      }
    }
  ]
*/
