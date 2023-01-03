<template>
  <div>
    <ArticleCard v-for="item in blogList" :cardInfo="item" :key="item.id" />
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import ArticleCard from "@/components/article-card";
import { useLoadBlogList } from "@/hooks/useLoadBlogList";
import type { BlogItem } from "@/http/api/portal/type";

const blogList: Ref<Omit<BlogItem, "content">[]> = ref([]);

const params = {
  type: "public" as "public" | "private",
  pageNum: 1,
  pageSize: 10
};

const props = {
  params,
  originData: blogList
};

useLoadBlogList(props);
</script>

<style scoped></style>
