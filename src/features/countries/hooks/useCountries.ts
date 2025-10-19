import { useQuery } from "@tanstack/vue-query";
import { getCountriesApi, getCountriesByRegionApi } from "../api/countries.api";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";

export const useCountries = () => {
  const route = useRoute();
  const region = ref(route.query.region?.toString() ?? null);

  watch(
    () => [route.query],
    (newRegion) => {
      region.value = newRegion?.toString() ?? "";
    },
    { deep: true }
  );

  const queryKey = computed(() => {
    return region.value ? ["CountriesByRegion", region.value] : ["Countries"];
  });

  const queryFn = () => {
    if (route.query.region) {
      return getCountriesByRegionApi({ region: route.query.region.toString() });
    }
    return getCountriesApi({});
  };

  return useQuery({
    queryKey: queryKey.value,
    queryFn,
    staleTime: 0,
  });
};
