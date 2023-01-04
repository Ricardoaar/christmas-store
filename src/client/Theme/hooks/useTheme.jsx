import React from "react";
import { ThemeContext } from "@client/Theme/context/ThemeContext";

/**
 * @returns {object} - theme - The current theme | setTheme - Function to change the theme, it can only receive the values of the THEMES object
 * @throws {Error} - If hook is used outside the ThemeContextProvider
 */
const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return themeContext;
};

export default useTheme;
