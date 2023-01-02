import React from "react";
import { DropdownTitleTypes } from "@components/atoms/inputs/Dropdown/Dropdown.types";

const DropdownTitle = ({ title, onClick, icon }) => {
  return (
    <div className="dropdown__title" onClick={onClick}>
      <div className="dropdown__selected-value">{title}</div>
      {icon && (
        <div className="dropdown__tools">
          <div className="dropdown__tool">{icon}</div>
        </div>
      )}
    </div>
  );
};

DropdownTitle.propTypes = DropdownTitleTypes;

export default DropdownTitle;
