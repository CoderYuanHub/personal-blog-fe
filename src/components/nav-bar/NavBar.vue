<template>
  <div class="h-60px flex justify-between items-center hover:bg-white text-blue-300 fixed top-0 left-0 right-0">
    <LoginCom>
      <div class="left pl-8 text-2xl italic cursor-pointer">blog</div>
    </LoginCom>
    <div class="right flex items-center pr-8 h-full">
      <div class="list" v-for="(item, index) in showMenuBar" :key="index" @click="skipMenu(item.url)">
        <div class="text-2xl mx-4 cursor-pointer hover:border-b-2" v-if="item.type === 'button'">
          {{ item.text }}
        </div>
        <img v-else class="w-12 h-12 rounded-full ml-4 cursor-pointer" :src="item.img" alt="" />
      </div>
      <div class="ml-4" @click="changDark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          v-if="!isDark"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
        <svg
          v-else
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
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import LoginCom from "@/components/login-com";
import type { MenuItem } from "./type";
import { useUserStore } from "@/stores/useUserStore";

const router = useRouter();
const userStore = useUserStore();

const showAdmin = computed(() => {
  const { isLogin } = userStore;
  return !isLogin;
});

const menuBar = ref<MenuItem[]>([
  {
    type: "button",
    text: "首页",
    url: "/"
  },
  {
    type: "button",
    text: "文章",
    url: "/"
  },
  {
    type: "button",
    text: "管理",
    url: "/admin",
    hide: showAdmin as unknown as boolean
  },
  {
    type: "img",
    img: "/logo.jpeg"
  }
]);

const showMenuBar = computed(() => {
  return menuBar.value.filter(item => !item.hide);
});

const skipMenu = (path: string) => {
  router.push({ path });
};

const isDark = ref(false);

const handleDark = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)")) {
    isDark.value = true;
  }
};

const changDark = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

handleDark();
</script>

<style scoped></style>
