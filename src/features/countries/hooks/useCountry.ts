import { useQuery } from "@tanstack/vue-query";
import { getCountryApi } from "../api/country.api";
import type { ComputedRef } from "vue";

export const useCountry = ({ name }: { name: ComputedRef<string> }) => {
  return useQuery({
    queryKey: ["Country", name],
    queryFn: () => getCountryApi({ name: name.value }),
    staleTime: 0,
  });
};
