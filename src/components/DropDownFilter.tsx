import { useContext, useState } from "react";
import { ThemeContext } from "../context/ContextProvider";
import { regions } from "../constants";
import { FaAngleDown } from "react-icons/fa";

const DropDownFilter = () => {
  const { isDarkMode, setRegion, region } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const lightMode = `text-veryDarkBlueLightModeText bg-lightModeElement border-2 border-lightModeElement`;
  const darkMode = `text-lightModeElement bg-darkBlueDarkModeElement border-2 border-darkBlueDarkModeElement`;

  return (
    <div className="w-full flex items-start md:justify-end md:mt-0 md:ml-0 ">
      <div
        className={`${
          isDarkMode ? darkMode : lightMode
        } px-2  flex py-2 items-center justify-between w-full max-w-[200px] rounded-sm my-4 mx-2 cursor-pointer relative`}
        onClick={() => setOpen(!open)}
      >
        <p>{region.name}</p>
        <FaAngleDown
          size={20}
          className={`${
            open ? "transform rotate-180" : ""
          } transition-transform delay-180`}
        />
        <div
          className={`${
            open ? "scale-y-100" : "scale-y-0"
          } absolute origin-top top-12 left-0 transform transition-transform w-[190px]`}
        >
          {regions.map((region, index) => (
            <div
              className={`${isDarkMode ? darkMode : lightMode}
              px-2 py-2  w-full text-sm transition-all hover:bg-darkGrayLightModeInput`}
              key={index}
              onClick={() => setRegion(region)}
            >
              <p>{region.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDownFilter;
