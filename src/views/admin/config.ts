import CreateBlog from "./BlogModule/createBlog";
import BlogManage from "./BlogModule/blogManage";
import type { VueElement } from "vue";
import type { ISubMenuList } from "@/components/admin-mune/type";
import type { CurComponentNameType } from "./type";

export const subMenuList: ISubMenuList[] = [
  {
    title: "博客模块",
    key: "blog",
    icon: "blog",
    menuItemList: [
      { title: "创建博客", key: "createBlog" },
      { title: "博客管理", key: "blogManage" }
    ]
  },
  {
    title: "其他模块",
    key: "other",
    icon: "other",
    menuItemList: [{ title: "其他模块", key: "other" }]
  }
];

export const componentMap: Record<CurComponentNameType, VueElement> = {
  createBlog: CreateBlog,
  blogManage: BlogManage
};
