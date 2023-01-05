<template>
  <FormCom :schema="schema" @modelChangeCallback="modelChangeCallback" inline />
  <TableCom :tableHeader="tableHeader" :tableData="tableData" @editItem="editBlogItem" @deleteItem="deleteBlogItem">
    <template #visibility="{ scope }">
      {{ visibilityMap[scope.row.visibility] }}
    </template>
  </TableCom>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FormCom from "@/components/form-com";
import TableCom from "@/components/table-com";
import { cloneDeep } from "lodash";
import type { ISchema } from "@/components/form-com/type";
import type { TableHeaderType } from "@/components/table-com/type";

const schema: ISchema[] = [
  {
    component: "input",
    key: "blogName",
    itemAttrs: {
      label: "博客名称"
    },
    attrs: {}
  },
  {
    component: "select",
    key: "publishYear",
    itemAttrs: {
      label: "发布年份"
    },
    attrs: {
      placeholder: "all",
      options: []
    }
  },
  {
    component: "select",
    key: "visibility",
    itemAttrs: {
      label: "可见度"
    },
    attrs: {
      placeholder: "all",
      options: [
        { label: "公开", value: "public" },
        { label: "仅自己可见", value: "private" }
      ]
    }
  }
];

const tableHeader: TableHeaderType = [
  { attrs: { type: "serialNumber", label: "序号" } },
  { attrs: { prop: "blogName", label: "博客名称" } },
  { attrs: { prop: "publishTime", label: "发布时间" } },
  { attrs: { prop: "visibility", label: "可见度" }, custom: true },
  { attrs: { type: "operate", label: "操作" } }
];

const originTableData = ref([
  { id: 1, blogName: "深入浅出node之koa", publishTime: "2023-01-01", visibility: "public" },
  { id: 2, blogName: "百行深拷贝", publishTime: "2023-01-01", visibility: "private" },
  { id: 3, blogName: "防抖与节流", publishTime: "2023-01-01", visibility: "public" },
  { id: 4, blogName: "手写SoftBind", publishTime: "2023-01-01", visibility: "private" }
]);

const tableData = cloneDeep(originTableData);

const modelChangeCallback = (model: Record<string, unknown>) => {
  const { blogName, visibility } = model;
  tableData.value = originTableData.value.filter(
    item => item.blogName.indexOf(blogName as string) !== -1 && item.visibility.indexOf(visibility as string) !== -1
  );
};

const visibilityMap = {
  public: "公开",
  private: "仅自己可见"
};

const editBlogItem = (id: number) => {
  console.log("edit", id);
};

const deleteBlogItem = (id: number) => {
  console.log("delete", id);
};
</script>

<style scoped lang="less"></style>
