import { useContext } from "react";
import { CountryGrid, Navbar, SearchBarFilterContainer } from "./components";
import { ThemeContext } from "./context/ContextProvider";
const App = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const lightModeBackground = `bg-veryLightGrayLightModeBackground`;
  const darkModeBackground = `bg-veryDarkBlueDarkModeBackground`;
  return (
    <>
      <Navbar />
      <main
        className={`${isDarkMode ? darkModeBackground : lightModeBackground}`}
      >
        <SearchBarFilterContainer />
        <CountryGrid />
      </main>
    </>
  );
};

export default App;
