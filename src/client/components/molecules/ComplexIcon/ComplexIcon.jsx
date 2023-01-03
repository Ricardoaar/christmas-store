import React from "react";
import IconComponent from "@components/atoms/Icon/Icon";

import { generateFontAwesomeIconClassname } from "@client/utils/generateFontAwesomeIcon";
import { complexIconTypes } from "@components/molecules/ComplexIcon/ComplexIcon.types";

const ComplexIcon = ({ icon = "", onClick, onHover, active, ...iconProps }) => {
  const iconClassname = generateFontAwesomeIconClassname(icon);
  return (
    <button
      className={`icon__container ${active && "active"}`}
      onClick={onClick}
      onMouseEnter={onHover}
      data-testid="icon-container"
    >
      <IconComponent {...iconProps} className={`${iconClassname} `} />
    </button>
  );
};

ComplexIcon.propTypes = complexIconTypes;

export default ComplexIcon;
