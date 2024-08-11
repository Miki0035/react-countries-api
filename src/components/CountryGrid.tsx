import { useContext, useState } from "react";
import { ThemeContext } from "../context/ContextProvider";
import data from "../constants/data.json";
import CountryCard from "./CountryCard";

const CountryGrid = () => {
  const { isDarkMode, country, region } = useContext(ThemeContext);
  const lightMode = `bg-veryLightGrayLightModeBackground`;
  const darkMode = `bg-veryDarkBlueDarkModeBackground`;

  const lightModePaginate = `text-veryDarkBlueLightModeText bg-lightModeElement border-2 border-veryDarkBlueLightModeText`;
  const darkModePaginate = `text-lightModeElement bg-darkBlueDarkModeElement border-2 border-veryLightGrayLightModeBackground`;

  const [countryPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCountry = currentPage * countryPerPage;
  const indexofFirstCountry = indexOfLastCountry - countryPerPage;
  const currentCountries = data.slice(indexofFirstCountry, indexOfLastCountry);

  //previous page
  const prevPage = () => {
    if (currentPage <= 0) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  //next page
  const nextPage = () => {
    if (currentPage >= Math.ceil(data.length / countryPerPage)) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <article className="w-full h-dvh">
      <div
        className={`${
          isDarkMode ? darkMode : lightMode
        } w-full grid grid-cols-1 gap-2 justify-items-center lg:grid-cols-2 lg:gap-2 xl:grid-cols-4 xl:gap-8 xl:px-10 `}
      >
        {country && region ? (
          (() => {
            const found = data.filter(
              (value) =>
                value.region.trim().toLowerCase() === region.toLowerCase() &&
                value.name
                  .trim()
                  .toLowerCase()
                  .startsWith(country.toLowerCase())
            );
            if (found.length === 0)
              return (
                <div
                  className={`${
                    isDarkMode ? darkMode : lightMode
                  } flex flex-row self-end text-2xl`}
                >
                  <span
                    className={`${
                      isDarkMode
                        ? "text-lightModeElement"
                        : "text-veryDarkBlueLightModeText"
                    } my-5`}
                  >
                    No Country Found
                  </span>
                </div>
              );
            return found.map((countries, index) => (
              <CountryCard
                image={countries.flag}
                name={countries.name}
                population={countries.population}
                region={countries.region}
                capital={countries.capital!}
                nativeName={""}
                subregion={""}
                topLevelDomain={""}
                currencies={""}
                language={""}
                borderCountries={""}
                key={index}
              />
            ));
          })()
        ) : country ? (
          (() => {
            const found = data.filter((value) =>
              value.name.trim().toLowerCase().startsWith(country.toLowerCase())
            );
            if (found.length === 0)
              return (
                <div
                  className={`${
                    isDarkMode ? darkMode : lightMode
                  } flex flex-row self-end text-2xl`}
                >
                  <span
                    className={`${
                      isDarkMode
                        ? "text-lightModeElement"
                        : "text-veryDarkBlueLightModeText"
                    } my-5`}
                  >
                    No Country Found
                  </span>
                </div>
              );
            return found.map((countries, index) => (
              <CountryCard
                image={countries.flag}
                name={countries.name}
                population={countries.population}
                region={countries.region}
                capital={countries.capital!}
                nativeName={""}
                subregion={""}
                topLevelDomain={""}
                currencies={""}
                language={""}
                borderCountries={""}
                key={index}
              />
            ));
          })()
        ) : region ? (
          (() => {
            const found = data.filter(
              (value) =>
                value.region.trim().toLowerCase() === region.toLowerCase()
            );
            return found.map((countries, index) => (
              <CountryCard
                image={countries.flag}
                name={countries.name}
                population={countries.population}
                region={countries.region}
                capital={countries.capital!}
                nativeName={""}
                subregion={""}
                topLevelDomain={""}
                currencies={""}
                language={""}
                borderCountries={""}
                key={index}
              />
            ));
          })()
        ) : (
          <>
            {currentCountries.map((country, index) => (
              <CountryCard
                key={index}
                image={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital!}
                nativeName={""}
                subregion={""}
                topLevelDomain={""}
                currencies={""}
                language={""}
                borderCountries={""}
              />
            ))}
          </>
        )}
      </div>
      {!country && !region && (
        <div
          className={`${
            isDarkMode ? darkMode : lightMode
          } flex w-full h-[100px]`}
        >
          <div className="flex justify-center items-center w-full">
            <button
              onClick={() => prevPage()}
              disabled={currentPage === 1}
              className={`${
                isDarkMode ? darkModePaginate : lightModePaginate
              } cursor-pointer px-2 py-1 mx-2 disabled:opacity-25 disabled:hover:cursor-default`}
            >
              Prev
            </button>

            <button
              onClick={() => nextPage()}
              disabled={currentPage === 32}
              className={`${
                isDarkMode ? darkModePaginate : lightModePaginate
              } cursor-pointer px-2 py-1 mx-2 disabled:opacity-25 disabled:hover:cursor-default`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default CountryGrid;
