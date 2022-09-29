import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "game",
      component: () => import("@/views/SnakeGame.vue"),
    },
    {
      path: "/game",
      name: "贪吃蛇",
      component: () => import("@/views/SnakeGame.vue"),
    },
  ],
});

export default router;
