import type { RouteRecordRaw } from "vue-router";
import HomePage from "@/features/countries/views/index.vue";
export const CountiesRoutes: RouteRecordRaw[] = [
  { path: "/countries", component: HomePage },
];
