import React, { useContext } from "react";
import { ThemeContext } from "@client/Theme/context/ThemeContext/ThemeContextProvider";
import { THEMES } from "@client/Theme/context/ThemeContext/ThemeContext.constants";
import TextInput from "@components/atoms/inputs/TextInput/TextInput";
import DropdownList from "@components/molecules/DropdownList/DropdownList";
import ComplexIcon from "@components/molecules/ComplexIcon/ComplexIcon";

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
      <ComplexIcon icon={"envelope"} color={"primary"} />
    </>
  );
};

const themeDropdownOptions = Object.entries(THEMES).map(([key, value]) => {
  return { label: key, value };
});

export const ThemeSetter = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <DropdownList
      options={themeDropdownOptions}
      onChange={setTheme}
      initialSelected={theme}
      color={"secondary"}
    />
  );
};

const HomePage = () => {
  return <AppContent />;
};

export default HomePage;
