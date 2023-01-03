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
import useFontAwesomeIconClass from "@client/hooks/useFontAwesomeIconClass";
import { connect, useDispatch } from "react-redux";
import {
  setFilter,
  setLayout,
  setPage,
  setPageSize,
  setSortBy,
  setSortDirection
} from "@client/redux/reducers/app/actions";
import ComplexIcon from "@components/molecules/ComplexIcon/ComplexIcon";

const themeDropdownOptions = Object.entries(THEMES).map(([key, value]) => {
  return { label: key, value };
});

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

const PageContent = ({
  children,
  sortBy,
  filter,
  layout,
  setSortBy,
  setFilter,
  setLayout
}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { className: themeIcon } = useFontAwesomeIconClass(
    getIconPerTheme(theme)
  );
  const { className: sortByIcon } = useFontAwesomeIconClass("arrow-down");

  const pageLayouts = useMemo(
    () => [
      {
        value: "list",
        "aria-label": "layout-cards-vertical",
        icon: "panorama",
        active: layout === "list",
        onClick: () => setLayout("list")
      },
      {
        "aria-label": "layout-cards-horizontal",
        icon: "clone",
        active: layout === "card-horizontal",
        onClick: () => setLayout("card-horizontal")
      },
      {
        "aria-label": "layout-cards-grid",
        icon: "panorama",
        active: layout === "card-vertical",
        onClick: () => setLayout("card-vertical")
      }
    ],
    [layout, setLayout]
  );

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
              control={{
                value: filter,
                onChange: setFilter
              }}
            />
            <DropdownList
              options={sortDropdownOptions}
              placeholder={"Sort by"}
              icon={<IconComponent className={sortByIcon} />}
              value={sortBy}
              onChange={setSortBy}
            />
          </Stack>
        </Stack>
        <Stack
          direction={"horizontal"}
          type={"x-wide"}
          className={"layout-menu__container"}
        >
          {pageLayouts.map(({ ...props }) => {
            return <ComplexIcon key={props.icon} {...props} />;
          })}
        </Stack>
        {typeof children === "function" ? children({ layout }) : children}
      </Container>
    </>
  );
};
const mapStateToProps = state => {
  return {
    sortBy: state.app.sortBy,
    filter: state.app.filter,
    layout: state.app.layout
  };
};

const ConnectedPageContent = connect(mapStateToProps, {
  setSortBy,
  setFilter,
  setLayout
})(PageContent);
export default ConnectedPageContent;
