import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

import Layout from "@/layout/index.vue";
import Home from "@/views/home/index.vue";
import Login from "@/views/login/index.vue";
import { errorView } from "@/router/modules/errorView";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: [{ path: "/", component: Home, name: "Home" }],
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
  {
    path: "/error",
    redirect: { name: "404" },
    children: errorView,
  },
  {
    path: "/:pathMatch(.*)",
    redirect: { name: "404" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
