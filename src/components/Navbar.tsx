import { useContext } from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from "../context/ContextProvider";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const lightMode = `text-veryDarkBlueLightModeText bg-lightModeElement`;
  const darkMode = `text-lightModeElement bg-darkBlueDarkModeElement`;
  return (
    <header
      className={`${
        isDarkMode ? darkMode : lightMode
      }  flex items-center w-full justify-center transition-colors`}
    >
      <nav
        className={`mx-5 flex justify-between items-center w-full max-w-[1400px] px-1 md:px-3 py-5 my-2`}
      >
        <h1 className={`text-md font-nunitoExtraBold md:text-lg  lg:text-xl`}>Where in the world ?</h1>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-sm md:text-lg  lg:text-xl flex"
        >
          {" "}
          {isDarkMode ? (
            <IoMoon size={20} className="mr-2" />
          ) : (
            <IoMoonOutline size={20} className="mr-2" />
          )}
          Dark Mode
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
