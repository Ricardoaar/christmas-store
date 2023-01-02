import React from "react";
import IconComponent from "@components/atoms/Icon/Icon";

import { generateFontAwesomeIconClassname } from "@client/utils/generateFontAwesomeIcon";
import { complexIconTypes } from "@components/molecules/ComplexIcon/ComplexIcon.types";

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
