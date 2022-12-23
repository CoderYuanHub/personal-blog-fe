import http from "@/http";
import type { IData, IGetBlogListParams, IGetBlogListRes, BlogItem } from "./type";

// 获取博客列表
export function getBlogList(data: IGetBlogListParams) {
  return http.get<IData<IGetBlogListRes>>({
    url: "/blogList",
    params: data
  });
}

// 获取博客详情
export function getBlogDetail(blogId: number) {
  return http.get<IData<BlogItem>>({
    url: `/blog/${blogId}`
  });
}
