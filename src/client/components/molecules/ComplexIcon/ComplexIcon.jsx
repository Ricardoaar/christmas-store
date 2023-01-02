import React from "react";
import { complexIconTypes } from "@components/molecules/ComplexIcon/ComplexIcon.types";
import IconComponent from "@components/atoms/Icon/Icon";

const generateFontAwesomeIconClassname = icon => {
  const [iconName = "envelope", iconPrefix = "solid"] = icon.split("-");
  return `fa-${iconPrefix} fa-${iconName}`;
};

const ComplexIcon = ({ icon = "", onClick, onHover, ...iconProps }) => {
  const iconClassname = generateFontAwesomeIconClassname(icon);
  return (
    <div
      className={`icon__container `}
      onClick={onClick}
      onMouseEnter={onHover}
      data-testid="icon-container"
    >
      <IconComponent {...iconProps} className={iconClassname} />
    </div>
  );
};

ComplexIcon.propTypes = complexIconTypes;

export default ComplexIcon;
