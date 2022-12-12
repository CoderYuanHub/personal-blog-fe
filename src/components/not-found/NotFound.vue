<template>
  <div class="container grid place-items-center">
    <div class="w-96 h-96 rounded-full border-2 border-dashed"></div>
    <p class="text-black text-2xl mt-6 cursor-pointer" @click="go">
      走丢了，返回首页。
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const go = (): void => {
  router.push("/");
};
</script>

<style scoped></style>
