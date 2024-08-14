import { Dispatch, SetStateAction } from "react";

export type ThemeContextProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
  isShowing: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
};

//Country card grid props
export type CountryCardProps = {
  key: number;
  image: string;
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital: string | "";
  nativeName: string | "";
  subregion: string | "";
  topLevelDomain: string[] | "";
  currencies:
    | [
        {
          name: string;
        }
      ]
    | "";
  language: string[] | "";
  borderCountries: string[] | "";
};

//Country detail props
export interface CountryDetailProps {
  country: Country;
  setIsShowing: () => void | undefined;
}

//Country interface for the API
export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root?: string;
    suffixes?: string[];
  };
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: {
    [key: string]: string;
  };
  translations?: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: [number, number];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: {
    eng: {
      f: string;
      m: string;
    };
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini?: {
    [year: string]: number;
  };
  fifa?: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  coatOfArms?: {
    png?: string;
    svg?: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng?: [number, number];
  };
  postalCode?: {
    format: string;
    regex?: string;
  };
}
