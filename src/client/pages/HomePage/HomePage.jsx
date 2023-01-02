import React, { useContext } from "react";
import { ThemeContext } from "@client/Theme/context/ThemeContext/ThemeContextProvider";
import { THEMES } from "@client/Theme/context/ThemeContext/ThemeContext.constants";
import TextInput from "@components/atoms/inputs/TextInput/TextInput";
import DropdownList from "@components/molecules/DropdownList/DropdownList";
import ComplexIcon from "@components/molecules/ComplexIcon/ComplexIcon";
import Heading from "@components/molecules/Heading/Heading";
import Card from "@components/atoms/Card/Card";
import Text from "@components/atoms/Text/Text";
import Stack from "@components/layouts/Stack/Stack";
import { StackTypes } from "@components/layouts/Stack/Stack.types";
import Header from "@pages/shared/Header/Header";

export const AppContent = () => {
  const [direction, setDirection] = React.useState("horizontal");

  return (
    <Stack type={StackTypes.xWide} direction={direction}>
      <ThemeSetter />
      <TextInput
        size={"sm"}
        weight={"light"}
        color={"secondary"}
        className={"searchbar"}
        placeholder={"Search"}
      />
      <ComplexIcon icon={"envelope"} color={"primary"} />
      <Heading size={"xxl"} level={2} weight={"bold"}>
        Cats are amazing
      </Heading>
      <Card direction={direction}>
        <Card.Header>
          <Text tag={"h3"} size={"xxl"}>
            Name
          </Text>
        </Card.Header>
        <Card.Body>
          <Text tag={"p"}>Cats are nice</Text>
        </Card.Body>
        <Card.Footer>Cats</Card.Footer>
      </Card>
      <button
        onClick={() =>
          setDirection(direction =>
            direction === "horizontal" ? "vertical" : "horizontal"
          )
        }
      >
        Change direction
      </button>
    </Stack>
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
  return (
    <>
      <Header title={"Super Store"} icon={"holly-berry"} />
      <AppContent />;
    </>
  );
};

export default HomePage;
