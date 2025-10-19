import DefaultLayout from "@/features/core/layouts/Default.vue";
import Countries from "@/features/countries/views/index.vue";
import { type RouteRecordRaw } from "vue-router";
export const CountiesRoutes: RouteRecordRaw[] = [
  {
    path: "/countries",
    component: DefaultLayout,
    children: [
      { component: Countries, path: "", name: "CountyList" },
      { component: Countries, path: ":countryName", name: "CountyInfo" },
    ],
  },
];
