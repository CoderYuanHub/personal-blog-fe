import { createRouter, createWebHistory } from "vue-router";
import { sessionCache } from "@/utils/cache";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      redirect: "/home",
      component: () => import("@/views/main"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/home")
        },
        {
          path: "/admin",
          name: "admin",
          component: () => import("@/views/admin")
        }
      ]
    },
    {
      path: "/:pathMatch(.*)",
      name: "404",
      component: () => import("@/components/not-found")
    }
  ]
});

router.beforeEach(to => {
  const userStore = sessionCache.getCache("userStore") || {};
  const { isLogin } = userStore;
  if (to.name === "admin" && !isLogin) return "/404";
});

export default router;
