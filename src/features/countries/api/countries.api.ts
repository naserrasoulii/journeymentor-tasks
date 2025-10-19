import { BASE_URL } from "@/features/core/constants";
import type { CountryType } from "../types";

export const getCountriesApi = async ({}): Promise<CountryType[]> => {
  const response = await fetch(
    `${BASE_URL}/all?fields=name,capital,population,region,flags,cioc,alpha3Code`
  );

  if (!response.ok) {
    throw new Error("Error");
  }

  return response.json();
};

export const getCountriesByRegionApi = async ({
  region,
}: {
  region: string;
}): Promise<CountryType[]> => {
  const response = await fetch(
    `${BASE_URL}/region/${region}?fields=name,capital,population,region,flags,cioc,alpha3Code`
  );

  if (!response.ok) {
    throw new Error("Error");
  }

  return response.json();
};
