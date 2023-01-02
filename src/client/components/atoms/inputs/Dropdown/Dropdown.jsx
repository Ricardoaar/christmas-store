import React from "react";
import withTextClassname from "@client/hocs/withTextClassname/withTextClassname";
import DropdownItem from "@components/atoms/inputs/Dropdown/DropdownItem";
import DropdownMenu from "@components/atoms/inputs/Dropdown/DropdownMenu";
import DropdownTitle from "@components/atoms/inputs/Dropdown/DropdownTitle";
import { DropdownTypes } from "@components/atoms/inputs/Dropdown/Dropdown.types";

const DropdownBase = ({ children, className }) => {
  return (
    <div
      className={`dropdown__container ${className}`}
      data-testid={"dropdown-list"}
    >
      {children}
    </div>
  );
};

DropdownBase.propTypes = DropdownTypes;
const Dropdown = withTextClassname(DropdownBase);

Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;
Dropdown.Title = DropdownTitle;
export default Dropdown;
