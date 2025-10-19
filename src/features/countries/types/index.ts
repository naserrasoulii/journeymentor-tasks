export interface CountryType {
  name: string;
  capital: string;
  region: string;
  population: number;
  alpha3Code: string;
  cioc: string;
  flags: Flags;
  independent: boolean;
}

export interface CoutryInfoType {
  name: string;
  capital: string;
  subregion: string;
  region: string;
  population: number;
  borders: string[];
  nativeName: string;
  flags: Flags;
  currencies: Currency[];
  languages: Language[];
  independent: boolean;
}

interface Flags {
  svg: string;
  png: string;
}
interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}
