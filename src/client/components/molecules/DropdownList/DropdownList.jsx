import React, { useCallback, useEffect, useMemo } from "react";
import { getElementKeyOrDefault } from "@client/utils/getElementKeyOrDefault";

import Dropdown from "@components/atoms/inputs/Dropdown/Dropdown";
import { useToggleState } from "@client/hooks/useToggleState";
import { useControlProps } from "@client/hooks/useControlledProps";
import { dropdownListProptypes } from "@components/molecules/DropdownList/DropdownList.types";

const valueGetter = value => value;

function DropdownList({
  placeholder = "Select",
  options = [],
  initialSelected,
  onChange,
  value,
  className
}) {
  const {
    state: showMenu,
    toggleState: toggleMenu,
    setFalse: closeMenu
  } = useToggleState(false);

  const { value: selectedInput, onChange: changeSelectedInput } =
    useControlProps(
      initialSelected,
      {
        onChange: onChange,
        value: value
      },
      valueGetter
    );

  const generateHandleChangeFunction = useCallback(
    value => () => {
      changeSelectedInput(value);
      closeMenu();
    },
    [changeSelectedInput, closeMenu]
  );

  //Only mount and unmount
  useEffect(() => {
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, []);

  const handleTitleClick = e => {
    e.stopPropagation();
    toggleMenu();
  };

  const dropdownTitle = useMemo(() => {
    return getElementKeyOrDefault(options, selectedInput, placeholder);
  }, [options, selectedInput, placeholder]);

  return (
    <Dropdown className={className}>
      <Dropdown.Title onClick={handleTitleClick} title={dropdownTitle} />
      {showMenu && (
        <Dropdown.Menu
          options={options}
          generateHandleChangeFunction={generateHandleChangeFunction}
        >
          {options.map(({ value, label }) => {
            return (
              <Dropdown.Item
                key={value}
                value={value}
                label={label}
                onClick={generateHandleChangeFunction(value)}
              />
            );
          })}
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
}

DropdownList.propTypes = dropdownListProptypes;

export default DropdownList;
