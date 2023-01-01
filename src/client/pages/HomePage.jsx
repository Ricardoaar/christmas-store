import React, { useContext } from "react";
import { ThemeContext } from "@client/Theme/context/ThemeContext/ThemeContextProvider";
import { THEMES } from "@client/Theme/context/ThemeContext/ThemeContext.constants";
import Text from "@components/atoms/Text/Text";

export const AppContent = () => {
  return (
    <>
      <ThemeSetter />
      <Text tag={"h1"} size={"xxl"} weight={"light"} color={"secondary"}>
        Cats
      </Text>
      {/*<div className="background-gradient">*/}
      {/*  <h1>Hello World</h1>*/}
      {/*</div>*/}
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
