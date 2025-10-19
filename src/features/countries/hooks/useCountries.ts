import { useQuery } from "@tanstack/vue-query";
import { getCountriesApi, getCountriesByRegionApi } from "../api/countries.api";
import { useRoute } from "vue-router";
import { computed } from "vue";
import Fuse from "fuse.js";

export const useCountries = () => {
  const route = useRoute();
  const region = computed(() => route.query.region?.toString() ?? null);
  const search = computed(() => route.query.search?.toString() ?? null);

  const queryKey = computed(() => {
    const key = ["Countries"];
    if (region.value) key.push("region", region.value);
    return key;
  });

  const queryFn = () => {
    if (route.query.region) {
      return getCountriesByRegionApi({ region: route.query.region.toString() });
    }
    return getCountriesApi({});
  };

  const query = useQuery({
    queryKey,
    queryFn,
    staleTime: 0,
  });

  const filteredData = computed(() => {
    if (!query.data.value) return [];

    const countries = query.data.value;

    if (!search.value) return countries;

    const fuse = new Fuse(countries, {
      keys: ["name"],
      threshold: 0.1,
      distance: 100,
      minMatchCharLength: 1,
    });

    const results = fuse.search(search.value);
    return results.map((result) => result.item);
  });

  return {
    ...query,
    data: filteredData,
  };
};
