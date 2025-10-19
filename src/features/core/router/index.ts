import { CountiesRoutes } from "@/features/countries/routes";
import {
  createMemoryHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/countries" },
  ...CountiesRoutes,
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
