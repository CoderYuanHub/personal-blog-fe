<template>
  <NavBar />
  <HomeBg />
  <div class="mx-auto" :class="{ container: curRouteName !== 'admin' }">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/nav-bar";
import HomeBg from "@/components/home-bg";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const curRouteName = computed(() => {
  return route.name;
});
</script>

<style scoped></style>
