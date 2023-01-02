import React, { useContext } from "react";
import { ThemeContext } from "@client/Theme/context/ThemeContext/ThemeContextProvider";
import { THEMES } from "@client/Theme/context/ThemeContext/ThemeContext.constants";
import TextInput from "@components/atoms/inputs/TextInput";

export const AppContent = () => {
  return (
    <>
      <ThemeSetter />
      <TextInput
        size={"sm"}
        weight={"light"}
        color={"secondary"}
        className={"searchbar"}
        placeholder={"Search"}
      />
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
