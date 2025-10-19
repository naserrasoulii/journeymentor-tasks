<template>
  <div class="my-8 flex items-stretch justify-between">
    <div
      class="shadow-md relative p-2 rounded-lg min-w-80 bg-white text-dark-gray"
    >
      <input
        class="w-full h-full outline-none border-none pl-10"
        placeholder="Search for a country..."
        @input="updateQueryParams"
        v-model="search"
      />
      <IconSearch
        size="20"
        class="absolute top-1/2 left-4 -translate-y-1/2"
      />
    </div>

    <select
      v-model="region"
      @change="onRegionChange"
      class="shadow-md rounded-md px-6 py-3 bg-white focus:outline-none cursor-pointer select"
    >
      <option value="">Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { IconSearch } from "@tabler/icons-vue";
import { debounce } from "lodash";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const region = ref("");
const search = ref("");

if (route.query.region) {
  region.value = route.query.region.toString();
}

if (route.query.search) {
  search.value = route.query.search.toString();
}

const onRegionChange = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  region.value = target.value;

  updateQueryParams();
};

const updateQueryParams = debounce(() => {
  const query: Record<string, string> = {};

  if (region.value) query.region = region.value;
  if (search.value.trim()) query.search = search.value.trim();

  router.push({ query });
}, 500);
</script>
