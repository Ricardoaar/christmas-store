import React from "react";
import { DropdownMenuTypes } from "@components/atoms/inputs/Dropdown/Dropdown.types";

const DropdownMenu = ({ children }) => {
  return <div className={"dropdown__menu"}>{children}</div>;
};
DropdownMenu.propTypes = DropdownMenuTypes;

export default DropdownMenu;
