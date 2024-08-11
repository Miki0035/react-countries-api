import React, { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { ThemeContext } from "../context/ContextProvider";
import { CountryDetailProps } from "../types";
import { numberWithCommas } from "../utils";
import data from "../constants/data.json";

const CountryDetailCard: React.FC<CountryDetailProps> = ({
  setIsShowing,
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  const darkModeBorderColor = `shadow-md shadow-veryDarkBlueLightModeText`;
  const lightModeBorderColor = `shadow-md shadow-darkGrayLightModeInput`;
  const lightMode = `text-veryDarkBlueLightModeText bg-veryLightGrayLightModeBackground`;
  const darkMode = `text-lightModeElement bg-veryDarkBlueDarkModeBackground`;
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={` ${
        isDarkMode ? darkMode : lightMode
      } w-full h-[3200px] absolute top-20 left-0 flex flex-col items-center z-10`}
    >
      <div className="w-full h-full">
        <div className="flex justify-start my-12 mx-5 items-center">
          <button
            className={` ${isDarkMode ? darkMode : lightMode} flex ${
              isDarkMode ? darkModeBorderColor : lightModeBorderColor
            }  px-5 py-1 flex items-center justify-center`}
            onClick={() => setIsShowing()}
          >
            <BiArrowBack size={20} className="mr-2" /> Back
          </button>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:px-3 lg:py-5 lg:justify-center">
          <div className="w-full flex  max-w-[450px] justify-center  lg:justify-start lg:mr-4  ">
            <img className="w-full h-full" src={flag} alt={flag} />
          </div>
          <div className="flex flex-col items-start px-5 py-3 mb-3 lg:ml-5 lg:py-0">
            <h1 className="font-nunitoExtraBold text-xl my-3 md:text-2xl">
              {name}
            </h1>
            <div className="flex flex-col md:flex-row md:justify-between md:full lg:w-[600px]">
              <div className="flex flex-col">
                <p className="font-nunitolight text-md py-1">
                  Native Name:{" "}
                  <span className="font-nunitoLight  text-sm">
                    {" "}
                    {nativeName}
                  </span>{" "}
                </p>
                <p className="font-nunitoBold text-md py-1">
                  Population:{" "}
                  <span className="font-nunitoLight text-md ">
                    {numberWithCommas(population!)}
                  </span>
                </p>
                <p className="font-nunitoBold text-md py-1">
                  Region: <span className="font-nunitoLight"> {region}</span>{" "}
                </p>
                <p className="font-nunitoBold text-md py-1">
                  Sub Region:{" "}
                  <span className="font-nunitoLight"> {subregion}</span>{" "}
                </p>
                <p className="font-nunitoBold text-md py-1">
                  Capital: <span className="font-nunitoLight"> {capital}</span>{" "}
                </p>
              </div>
              <div className="flex flex-col items-start md:ml-3 md:w-[300px]">
                <p className="font-nunitoBold text-md py-1">
                  Top Level Domain:{" "}
                  <span className="font-nunitoLight"> {topLevelDomain}</span>{" "}
                </p>
                <p className="font-nunitoBold text-md py-1 flex flex-wrap">
                  Currencies:{" "}
                  {currencies?.map((currency, index) => (
                    <span key={index} className={`font-nunitoLight mx-1`}>
                      {currency.name}
                    </span>
                  ))}
                </p>
                <p className="font-nunitoBold text-md py-1 ">
                  Languages:{" "}
                  {languages?.map((language, index) => (
                    <span key={index} className={`font-nunitoLight`}>
                      {language.name}{" "}
                      {index === languages.length - 1 ? " " : " ,"}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="font-nunitoBold text-md flex flex-col mt-7 lg:flex-row lg:items-center lg:mt-12">
              <span className="mb-2 lg:mr-2">Border Countries: </span>
              <div className="flex justify-start flex-wrap">
                {borders?.map((border, index) => {
                  const foundCountries = data.filter(
                    (value) =>
                      value.alpha3Code.toLowerCase() === border.toLowerCase()
                  );
                  return (
                    foundCountries && (
                      <span
                        key={index}
                        className={`px-3 text-center py-1 text-sm mx-2 my-1 font-nunitoLight ${
                          isDarkMode
                            ? darkModeBorderColor
                            : lightModeBorderColor
                        }`}
                      >
                        {foundCountries[0].name}{" "}
                      </span>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailCard;
