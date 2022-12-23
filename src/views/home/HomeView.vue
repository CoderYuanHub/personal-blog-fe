<template>
  <div>
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <div v-for="item in blogList" :key="item.id" class="m-20">
      {{ item.title }}
    </div>
  </div>
  <div class="h-6">22222</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ArticleCard from "@/components/article-card";
import { useLoadBlogList } from "@/hooks/useLoadBlogList";
import type { Ref } from "vue";
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
