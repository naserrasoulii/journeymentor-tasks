<template>
  <div v-if="isPending">loading...</div>
  <template v-else>
    <div class="container grid desktop:grid-cols-4 gap-20 max-desktop:gap-10">
      <div v-for="country in countries">
        <CountryInfoCard
          v-bind="country"
          :key="country.name"
        />
      </div>
    </div>
  </template>
</template>
<script setup lang="ts">
import CountryInfoCard from "../components/CountryInfoCard.vue";
import { useCountries } from "../hooks/useCountries";

const { data: countries, isPending } = useCountries();
</script>
