import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ContextProvider";
import CountryCard from "./CountryCard";
import { Country } from "../types";
import { ClipLoader } from "react-spinners";

const CountryGrid = () => {
  const { isDarkMode, country, region } = useContext(ThemeContext);
  const lightMode = `bg-veryLightGrayLightModeBackground`;
  const darkMode = `bg-veryDarkBlueDarkModeBackground`;

  const lightModePaginate = `text-veryDarkBlueLightModeText bg-lightModeElement border-2 border-veryDarkBlueLightModeText`;
  const darkModePaginate = `text-lightModeElement bg-darkBlueDarkModeElement border-2 border-veryLightGrayLightModeBackground`;

  const [countryPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);

  const indexOfLastCountry = currentPage * countryPerPage;
  const indexofFirstCountry = indexOfLastCountry - countryPerPage;
  const currentCountries = countries.slice(
    indexofFirstCountry,
    indexOfLastCountry
  );

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
    if (currentPage >= Math.ceil(countries.length / countryPerPage)) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const fetchAllCountries = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countries = await response.json();
      setCountries(countries);
      setIsLoading(false);
    } catch (error) {
      console.error(`Error loading countries: ${error}`);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  if (isLoading)
    return (
      <div
        className={`flex justify-center items-center${
          isDarkMode
            ? "bg-veryDarkBlueDarkModeBackground text-veryDarkBlueLightModeText"
            : "bg-veryLightGrayLightModeBackground text-veryDarkBlueLightModeText"
        }`}
      >
        <ClipLoader color={isDarkMode ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'} size={38} />
      </div>
    );

  return (
    <article className="w-full h-dvh">
      <div
        className={`${
          isDarkMode ? darkMode : lightMode
        } w-full grid grid-cols-1 gap-2 justify-items-center lg:grid-cols-2 lg:gap-4 xl:grid-cols-4 xl:gap-14 xl:px-10 `}
      >
        {isLoading && countries.length < 0 ? (
          <div>Loading...</div>
        ) : country && region.value !== "" ? (
          (() => {
            const found = countries.filter(
              (value) =>
                value.region.trim().toLowerCase() ===
                  region.value.toLowerCase() &&
                value.name.common
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
                image={countries.flags.svg}
                name={countries.name}
                population={countries.population}
                region={countries.region}
                capital={countries.capital?.[0] ?? ""}
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
            const found = countries.filter((value) =>
              value.name.common
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
                image={countries.flags.svg}
                name={countries.name}
                population={countries.population}
                region={countries.region}
                capital={countries.capital?.[0] ?? ""}
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
        ) : region.value !== "" ? (
          (() => {
            const found = countries.filter(
              (value) =>
                value.region.trim().toLowerCase() === region.value.toLowerCase()
            );
            return found.map((countries, index) => (
              <CountryCard
                image={countries.flags.svg}
                name={countries.name}
                population={countries.population}
                region={countries.region}
                capital={countries.capital?.[0] ?? ""}
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
                image={country.flags.svg}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0] ?? ""}
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
      {!country && region.value === "" && (
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
