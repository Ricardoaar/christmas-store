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
import { connect } from "react-redux";
import {
  setFilter,
  setLayout,
  setSortBy,
  setSortDirection
} from "@client/redux/reducers/app/actions";
import ComplexIcon from "@components/molecules/ComplexIcon/ComplexIcon";
import PropTypes from "prop-types";

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
  setLayout,
  sortDirection,
  setSortDirection
}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { className: themeIcon } = useFontAwesomeIconClass(
    getIconPerTheme(theme)
  );
  const { className: sortByIcon } = useFontAwesomeIconClass(
    sortDirection === "asc" ? "arrow-up" : "arrow-down"
  );

  const pageLayouts = useMemo(
    () => [
      {
        "aria-label": "layout-list",
        icon: "list",
        active: layout === "list",
        onClick: () => setLayout("list")
      },
      {
        "aria-label": "layout-cards",
        icon: "clone",
        active: layout === "card",
        onClick: () => setLayout("card")
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
              icon={
                <IconComponent
                  onClick={e => {
                    e.stopPropagation();
                    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                  }}
                  className={sortByIcon}
                />
              }
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
        {typeof children === "function"
          ? children({ layout, sortBy, filter, sortDirection })
          : children}
      </Container>
    </>
  );
};

PageContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  sortBy: PropTypes.string,
  filter: PropTypes.string,
  layout: PropTypes.string,
  setSortBy: PropTypes.func,
  setFilter: PropTypes.func,
  setLayout: PropTypes.func
};

const mapStateToProps = state => {
  return {
    sortBy: state.app.sortBy,
    filter: state.app.filter,
    layout: state.app.layout,
    sortDirection: state.app.sortDirection
  };
};

const ConnectedPageContent = connect(mapStateToProps, {
  setSortBy,
  setFilter,
  setLayout,
  setSortDirection
})(PageContent);
export default ConnectedPageContent;
