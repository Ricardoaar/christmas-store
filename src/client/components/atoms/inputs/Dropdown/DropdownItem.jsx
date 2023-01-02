import React from "react";
import { DropdownItemsTypes } from "@components/atoms/inputs/Dropdown/Dropdown.types";

const DropdownItem = ({ label, onClick }) => {
  return (
    <div className={"dropdown__item"} onClick={onClick}>
      {label}
    </div>
  );
};

DropdownItem.propTypes = DropdownItemsTypes;

export default DropdownItem;
