import { useState, createContext, ReactNode } from "react";
import { ThemeContextProps } from "../types";

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  setIsDarkMode: () => {},
  country: "",
  setCountry: () => {},
  region: "",
  setRegion: () => {},
  isShowing: false,
  setIsShowing: () => {},
});

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [isShowing, setIsShowing] = useState(false);


  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        country,
        setCountry,
        region,
        setRegion,
        isShowing,
        setIsShowing
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ContextProvider, ThemeContext };
