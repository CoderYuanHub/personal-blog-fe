<template>
  <div class="group rounded-2xl shadow-md w-full h-72 flex mt-8 mb-8 overflow-hidden hover:shadow-xl">
    <div class="w-1/2 h-full p-3.5">
      <div class="text-base text-gray-400 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span> 发布于 {{ props.cardInfo.createAt }}</span>
      </div>
      <h3 class="text-2xl leading-loose">{{ props.cardInfo.title }}</h3>
      <div class="text-base text-current flex text-gray-400 leading-6 pt-4 pb-4">
        <span class="flex mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
            />
          </svg>
          {{ props.cardInfo.hot }}热度
        </span>
        <span class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
          {{ props.cardInfo.comment }}评论
        </span>
      </div>
      <div class="text-xl text-overflow line-clamp-3">{{ props.cardInfo.content }}</div>
    </div>
    <div class="w-1/2 h-full bg-cover overflow-hidden">
      <div
        class="w-full h-full bg-center group-hover:rotate-6 group-hover:scale-150 transition duration-150 ease-in-out"
        :style="{ backgroundImage: `url(${props.cardInfo.url})` }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { BlogItem } from "@/http/api/portal/type";

const props = defineProps<{
  cardInfo: Omit<BlogItem, "content">;
}>();
</script>

<style scoped lang="less"></style>
