<template>
  <RouterLink
    :to="{
      name: 'CountyInfo',
      params: { countryName: props.alpha3Code },
    }"
    class="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-dark-blue block"
  >
    <div class="aspect-video">
      <img
        loading="lazy"
        :src="props.flags.png"
        alt="flag"
        class="w-full h-full"
      />
    </div>
    <div class="px-6 py-6">
      <h2 class="font-extrabold">
        {{ props.name }}
      </h2>
      <div class="mt-4">
        <p>
          <span class="font-semibold"> Population </span> :
          {{ formatNumber(props.population).toString() }}
        </p>
        <p>
          <span class="font-semibold"> Region </span> :
          {{ props.region }}
        </p>
        <p>
          <span class="font-semibold"> Capital </span> :
          {{ props.capital }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { formatNumber } from "@/features/core/utils/formatNumber";
import type { CountryType } from "../types";
import { RouterLink } from "vue-router";

const props = defineProps<CountryType>();
</script>
