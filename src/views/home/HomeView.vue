<template>
  <div>
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
  </div>
  <div class="h-6">22222</div>
</template>

<script setup lang="ts">
import ArticleCard from "@/components/article-card";
import { getBlogList } from "@/http/api/portal/portal";

const params = {
  type: "public" as "public" | "private",
  pageNum: 1,
  pageSize: 10
};

getBlogList(params);
</script>

<style scoped></style>
