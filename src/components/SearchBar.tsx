import { ChangeEvent, useContext, useRef } from "react";
import { ThemeContext } from "../context/ContextProvider";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const { isDarkMode, setCountry } = useContext(ThemeContext);
  const ref = useRef<HTMLInputElement>(null);
  const lightMode = `text-veryDarkBlueLightModeText bg-lightModeElement border-2 border-lightModeElement`;
  const darkMode = `text-lightModeElement bg-darkBlueDarkModeElement border-2 border-darkBlueDarkModeElement`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div className="w-full max-w-[1400px] flex justify-center items-center ">
      <div
        onClick={() => ref.current?.focus()}
        className={`${
          isDarkMode ? darkMode : lightMode
        } px-3 flex py-2 w-full max-w-[450px]   rounded-lg my-4 mx-2 cursor-pointer`}
      >
        <IoSearch size={24} className="mx-4" />
        <input
          className={`${isDarkMode ? darkMode : lightMode} outline-none`}
          type="text"
          placeholder=" Search for a country..."
          ref={ref}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
