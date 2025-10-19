<template>
  <div>
    <button
      class="flex items-center gap-2 bg-white rounded-lg shadow-md px-6 py-2"
      @click="() => $router.back()"
    >
      <IconArrowLeft size="20" />
      Back
    </button>
    <div
      class="mt-20"
      v-if="isPending"
    >
      loading ...
    </div>
    <div
      class="mt-20 grid grid-cols-[40%_auto] gap-24"
      v-if="country"
    >
      <div class="aspect-video w-full">
        <img
          :src="country.flags.png"
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col justify-center">
        <h1 class="font-extrabold text-2xl">{{ country.name }}</h1>
        <div class="my-6 grid grid-cols-2">
          <div>
            <p>
              <span class="font-semibold"> Native Name </span> :
              {{ country.nativeName }}
            </p>

            <p>
              <span class="font-semibold"> Population </span> :
              {{ formatNumber(country.population).toString() }}
            </p>

            <p>
              <span class="font-semibold"> Region </span> :
              {{ country.region }}
            </p>
            <p>
              <span class="font-semibold"> Sib Region </span> :
              {{ country.subregion }}
            </p>
            <p>
              <span class="font-semibold"> Capital </span> :
              {{ country.capital }}
            </p>
          </div>
          <div>
            <p><span class="font-semibold"> Top Level Domain </span> : -</p>
            <p>
              <span class="font-semibold"> Currencies </span> :
              <template v-for="(currencies, index) in country.currencies">
                {{ currencies.code }}
                <template v-if="index + 1 < country.currencies.length"
                  >,</template
                >
              </template>
            </p>
            <p>
              <span class="font-semibold"> Languages </span> :
              <template v-for="(lang, index) in country.languages">
                {{ lang.name }}
                <template v-if="index + 1 < country.languages.length"
                  >,</template
                >
              </template>
            </p>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="font-semibold">Border Countries:</span>
            <div class="flex items-center gap-2">
              <template v-for="border in country.borders">
                <RouterLink
                  :to="{ name: 'CountyInfo', params: { countryName: border } }"
                  class="bg-white rounded-sm shadow-md px-4 py-1"
                >
                  {{ border }}
                </RouterLink>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from "@/features/core/utils/formatNumber";
import { IconArrowLeft } from "@tabler/icons-vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useCountry } from "../hooks/useCountry";
import { computed } from "vue";
const route = useRoute();
const router = useRouter();
const countryName = computed(() => {
  return route.params.countryName?.toString() ?? "";
});
if (!countryName) {
  router.push("/countries");
}
const { data: country, isPending } = useCountry({ name: countryName });
</script>
