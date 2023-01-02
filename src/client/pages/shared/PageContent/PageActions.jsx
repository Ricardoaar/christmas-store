import React, { useContext, useMemo } from "react";
import Container from "@components/layouts/Containers/ContainerFluid";
import { ContainerTypes } from "@components/layouts/Containers/container.types";
import Stack from "@components/layouts/Stack/Stack";
import { ThemeContext } from "@client/Theme/context/ThemeContext";
import DropdownList from "@components/molecules/DropdownList/DropdownList";
import IconComponent from "@components/atoms/Icon/Icon";
import { THEMES } from "@client/Theme/context/ThemeContext/ThemeContext.constants";
import { generateFontAwesomeIconClassname } from "@client/utils/generateFontAwesomeIcon";
import TextInput from "@components/atoms/inputs/TextInput/TextInput";
import Icon from "@components/atoms/Icon/Icon";
import useFontAwesomeIconClass from "@client/hooks/useFontAwesomeIconClass";

const themeDropdownOptions = Object.entries(THEMES).map(([key, value]) => {
  return { label: key, value };
});

const data = {
  id: 4,
  title: "Handmade Fresh Table",
  price: 687,
  description: "Andy shoes are designed to keeping in...",
  category: {
    id: 5,
    name: "Others",
    image: "https://placeimg.com/640/480/any?r=0.591926261873231"
  },
  images: [
    "https://placeimg.com/640/480/any?r=0.9178516507833767",
    "https://placeimg.com/640/480/any?r=0.9300320592588625",
    "https://placeimg.com/640/480/any?r=0.8807778235430017"
  ]
};

const sortDropdownOptions = [
  { value: "id", label: "id" },
  { value: "title", label: "title" },
  { value: "price", label: "price" },
  { value: "description", label: "description" }
];

const getIconPerTheme = theme => {
  const iconsPerThem = {
    [THEMES.halloween]: generateFontAwesomeIconClassname("cat"),
    [THEMES.christmas]: generateFontAwesomeIconClassname("sleigh")
  };
  return iconsPerThem[theme];
};

const PageContent = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const { className: themeIcon } = useFontAwesomeIconClass(
    getIconPerTheme(theme)
  );

  const { className: sortByIcon } = useFontAwesomeIconClass("arrow-down");

  return (
    <>
      <Container type={ContainerTypes.fixed} tag={"main"}>
        <Stack
          direction={"vertical"}
          type={"x-wide"}
          tag={"section"}
          className={"page-actions"}
        >
          <DropdownList
            options={themeDropdownOptions}
            onChange={setTheme}
            initialSelected={theme}
            color={"secondary"}
            icon={<IconComponent className={themeIcon} />}
          />
          <Stack direction={"horizontal"} type={"x-wide"}>
            <TextInput
              size={"sm"}
              weight={"light"}
              color={"secondary"}
              className={"searchbar"}
              placeholder={"Search"}
            />
            <DropdownList
              options={sortDropdownOptions}
              placeholder={"Sort by"}
              icon={<IconComponent className={sortByIcon} />}
            />
          </Stack>
        </Stack>
      </Container>
      {/*{children()}*/}
    </>
  );
};

export default PageContent;
