import { onMounted } from "vue";
import { getBlogList } from "@/http/api/portal/portal";
import type { Ref } from "vue";
import type { IGetBlogListParams, BlogItem } from "@/http/api/portal/type";

interface IProps {
  params: IGetBlogListParams;
  originData: Ref<Omit<BlogItem, "content">[]>;
}

export const useLoadBlogList = (props: IProps) => {
  const { params, originData } = props;

  const loadMore = async () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      const {
        data: { blogList }
      } = await getBlogList(params);
      originData.value.push(...blogList);
      params.pageNum++;
    }
  };

  onMounted(async () => {
    await loadMore();
    window.addEventListener("scroll", loadMore);
  });
};
