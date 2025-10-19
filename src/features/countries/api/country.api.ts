import { BASE_URL } from "@/features/core/constants";
import type { CoutryInfoType } from "../types";

export const getCountryApi = async ({
  name,
}: {
  name: string;
}): Promise<CoutryInfoType> => {
  const response = await fetch(
    `${BASE_URL}/alpha/${name}/?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,nativeName,flags`
  );

  if (!response.ok) {
    throw new Error("Error");
  }

  return response.json();
};
