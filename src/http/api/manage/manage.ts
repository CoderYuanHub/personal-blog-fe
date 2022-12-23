import http from "@/http";
import type {
  IData,
  ILoginParams,
  ILoginRes,
  ICreateBlogParams,
  ICreateBlogRes,
  IEditBlogParams,
  IEditBlogRes,
  IDeleteBlogRes
} from "./type";

// 登录
export function login(userInfo: ILoginParams) {
  return http.post<IData<ILoginRes>>({
    url: "/login",
    data: userInfo
  });
}

// 新增博客
export function createBlog(blogInfo: ICreateBlogParams) {
  return http.post<IData<ICreateBlogRes>>({
    url: "/blog",
    data: blogInfo
  });
}

// 编辑博客
export function editBlog(blogInfo: IEditBlogParams) {
  return http.put<IData<IEditBlogRes>>({
    url: "/blog",
    data: blogInfo
  });
}

// 删除博客
export function deleteBlog(blogId: number) {
  return http.delete<IData<IDeleteBlogRes>>({
    url: `/blog/${blogId}`
  });
}
