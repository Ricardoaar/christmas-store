import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import {
  initialThemeState,
  THEMES
} from "@client/context/ThemeContext/ThemeContext.constants";

export const ThemeContext = React.createContext(initialThemeState);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialThemeState.theme);

  const changeTheme = useCallback(value => {
    setTheme(currentTheme => {
      if (Object.values(THEMES).includes(value)) return value;
      return currentTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeContextProvider;
