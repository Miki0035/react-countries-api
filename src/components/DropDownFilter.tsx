import { ChangeEvent, useContext } from "react";
import { ThemeContext } from "../context/ContextProvider";
import { regions } from "../constants";

const DropDownFilter = () => {
  const { isDarkMode, setRegion } = useContext(ThemeContext);
  const lightMode = `text-veryDarkBlueLightModeText bg-lightModeElement border-2 border-lightModeElement`;
  const darkMode = `text-lightModeElement bg-darkBlueDarkModeElement border-2 border-darkBlueDarkModeElement`;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRegion(event.target.value);
  };
  return (
    <div className="w-full flex flex-col items-start mt-5 md:items-end md:mt-0 md:ml-0 ">
      <select
        id="region"
        className={`${
          isDarkMode ? darkMode : lightMode
        } pl-5 flex py-4 w-[250px]  rounded-md my-4 mx-2 cursor-pointer`}
        onChange={handleChange}
        defaultValue="Filter by Region"
      >
        <option disabled>Filter by Region</option>
        {regions.map((region, index) => (
          <option value={region.value!} key={index}>
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownFilter;
