import React, { useContext } from "react";
import { ThemeContext } from "@client/context/ThemeContext/ThemeContextProvider";
import { THEMES } from "@client/context/ThemeContext/ThemeContext.constants";

export const AppContent = () => {
  return (
    <>
      <ThemeSetter />
      <div className="myClass">
        <h1>Hello World</h1>
      </div>
    </>
  );
};

export const ThemeSetter = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <select value={theme} onChange={e => setTheme(e.currentTarget.value)}>
      {Object.values(THEMES).map((option, idx) => (
        <option value={option} key={idx}>
          {option}
        </option>
      ))}
    </select>
  );
};

const HomePage = () => {
  return <AppContent />;
};

export default HomePage;
