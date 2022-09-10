import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/HomePage.vue";
import Blog from "@/pages/BlogPage.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/foodu",
    component: Home,
  },
  {
    path: "/blog",
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
