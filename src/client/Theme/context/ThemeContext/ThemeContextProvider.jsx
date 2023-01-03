import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { initialThemeState, THEMES } from "./ThemeContext.constants";

export const ThemeContext = React.createContext(initialThemeState);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialThemeState.theme);

  useEffect(() => {
    const bodyRef = document.body;
    bodyRef.classList.add(theme);
  }, []);

  const changeTheme = useCallback(value => {
    setTheme(currentTheme => {
      if (Object.values(THEMES).includes(value)) {
        const bodyRef = document.body;
        bodyRef.classList.remove(currentTheme);
        bodyRef.classList.add(value);

        return value;
      }
      return currentTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeContextProvider;
