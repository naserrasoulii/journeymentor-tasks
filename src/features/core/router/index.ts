import { CountiesRoutes } from "@/features/countries/routes";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw
} from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: { path: "/countries" } },
  ...CountiesRoutes,
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
