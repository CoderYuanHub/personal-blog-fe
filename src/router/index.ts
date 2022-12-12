import { createRouter, createWebHistory } from "vue-router";

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

export default router;
