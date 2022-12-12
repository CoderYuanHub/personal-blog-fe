<template>
  <NavBar />
  <HomeBg />
  <div class="container mx-auto">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/nav-bar";
import HomeBg from "@/components/home-bg";
</script>

<style scoped></style>
