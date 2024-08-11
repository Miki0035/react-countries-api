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
  name: string;
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
  name?: string | "";
  topLevelDomain?: string[] | [];
  alpha2Code?: string | "";
  alpha3Code?: string | "";
  callingCodes?: string[] | [];
  capital?: string | "";
  altSpellings?: string[] | [];
  subregion?: string | "";
  region?: string | "";
  population?: number | "";
  latlng?: number[] | [];
  demonym?: string | "";
  area?: number | "";
  timezones?: string[] | [];
  borders?: string[] | [];
  nativeName?: string | "";
  numericCode?: string | "";
  flags?: {
    svg?: string | "";
    png?: string | "";
  };
  currencies?: currency[];
  languages?: language[];
  translations?: {
    br?: string | "";
    pt?: string | "";
    nl?: string | "";
    hr?: string | "";
    fa?: string | "";
    de?: string | "";
    es?: string | "";
    fr?: string | "";
    ja?: string | "";
    it?: string | "";
    hu?: string | "";
  };
  flag?: string | "";
  regionalBlocs?: regionBloc [];
  cioc?: string | "";
  independent?: boolean | "";
  setIsShowing: () => void | undefined;
}

type currency = {
  code?: string;
  name?: string;
  symbol?: string;
};

type language = {
  iso639_1?: string;
  iso639_2?: string;
  name?: string;
  nativeName?: string;
};

type regionBloc = {
  acronym?: string;
  name?: string;
};
