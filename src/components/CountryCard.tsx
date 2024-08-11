import React, { useContext, useState } from "react";
import { CountryCardProps } from "../types";
import { ThemeContext } from "../context/ContextProvider";
import data from "../constants/data.json";
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
  const [country, setCountry] = useState("");

  const countryInfo = data.find(
    (value) => value.name.toLowerCase().trim() === country.toLowerCase().trim()
  );

  const showCountryDetail = (countryName: string) => {
    setIsShowing(!isShowing);
    scrollToTop();
    setCountry(countryName);
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      {isShowing && countryInfo ? (
        <CountryDetailCard
          {...countryInfo}
          setIsShowing={() => {
            setIsShowing(!isShowing);
            setCountry("");
          }}
        />
      ) : (
        <div
          className={`${
            isDarkMode ? darkMode : lightMode
          } ${isDarkMode ? darkModeBorderColor : lightModeBorderColor} flex flex-col w-full max-w-[350px] my-3 rounded-sm cursor-pointer`}
          onClick={() => {
            showCountryDetail(name);
          }}
        >
          <div className="w-full h-[200px] flex justify-center">
            <img className="w-full h-full " src={image} alt={image} />
          </div>
          <div className="flex flex-col items-start px-5 py-3 mb-8">
            <h1 className="font-nunitoExtraBold text-xl my-3">{name}</h1>
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
