import React, { useContext, useState } from "react";
import { Country, CountryCardProps } from "../types";
import { ThemeContext } from "../context/ContextProvider";
import CountryDetailCard from "./CountryDetailCard";
import { numberWithCommas } from "../utils";

const CountryCard: React.FC<CountryCardProps> = ({
  image,
  name,
  population,
  region,
  capital,
}) => {
  const { isDarkMode, isShowing, setIsShowing } = useContext(ThemeContext);
  const lightMode = `text-veryDarkBlueLightModeText bg-lightModeElement border-2 border-lightModeElement`;
  const darkMode = `text-lightModeElement bg-darkBlueDarkModeElement border-2 border-darkBlueDarkModeElement`;
  const darkModeBorderColor = `shadow-md shadow-veryDarkBlueLightModeText`;
  const lightModeBorderColor = `shadow-md shadow-darkGrayLightModeInput`;
  const [currentCountry, setCurrentCountry] = useState<Country | null>();

  const showCountryDetail = async (countryName: string) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}/`
    );
    const data = await response.json();
    setCurrentCountry(data[0]);
    scrollToTop();
    setIsShowing(true);
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const notShowing = () => {
    setIsShowing(false);
    setCurrentCountry(null)
  };

  return (
    <>
      {isShowing && currentCountry ? (
        <CountryDetailCard country={currentCountry} setIsShowing={notShowing} />
      ) : (
        <div
          className={`${isDarkMode ? darkMode : lightMode} ${
            isDarkMode ? darkModeBorderColor : lightModeBorderColor
          } flex flex-col w-full max-w-[350px] my-3 rounded-sm cursor-pointer`}
          onClick={() => {
            showCountryDetail(name.common);
          }}
        >
          <div className="w-full h-[200px] flex justify-center">
            <img className="w-full h-full " src={image} alt={image} />
          </div>
          <div className="flex flex-col items-start px-5 py-3 mb-8">
            <h1 className="font-nunitoExtraBold text-xl my-3">{name.common}</h1>
            <p className="font-nunitoBold text-md">
              Population:{" "}
              <span className="font-nunitoLight text-md">
                {numberWithCommas(population)}
              </span>
            </p>
            <p className="font-nunitoBold text-md">
              Region: <span className="font-nunitoLight"> {region}</span>{" "}
            </p>
            <p className="font-nunitoBold text-md">
              Capital: <span className="font-nunitoLight"> {capital}</span>{" "}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryCard;
