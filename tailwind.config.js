/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlueDarkModeElement: "hsl(209, 23%, 22%)",
        veryDarkBlueDarkModeBackground: "hsl(207, 26%, 17%)",
        veryDarkBlueLightModeText: "hsl(200, 15%, 8%)",
        darkGrayLightModeInput: "hsl(0, 0%, 52%)",
        veryLightGrayLightModeBackground: "hsl(0, 0%, 98%)",
        lightModeElement: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        nunitoLight: ["NunitoLight", "sans-serif"],
        nunitoSemiBold: ["NunitoSemiBold", "NunitoLight", "sans-serif"],
        nunitoExtraBold: [
          "NunitoExtraBold",
          "NunitoSemiBold",
          "NunitoLight",
          "sans-serif",
        ],
        nunitoRegular: ["NunitoRegular", "NunitoLight", "sans-serif"],
        sans: [
          "NunitoRegular",
          "NunitoLight",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
