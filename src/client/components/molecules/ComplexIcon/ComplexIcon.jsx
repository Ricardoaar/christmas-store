import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import withTextClassname from "@client/hocs/withTextClassname/withTextClassname";
import { complexIconTypes } from "@components/molecules/ComplexIcon/ComplexIcon.types";

const generateFontAwesomeIconClassname = icon => {
  const [iconName = "envelope", iconPrefix = "solid"] = icon.split("-");
  return `fa-${iconPrefix} fa-${iconName}`;
};

const ComplexIcon = ({ icon = "", onClick, onHover, className }) => {
  const iconClassname = generateFontAwesomeIconClassname(icon);

  return (
    <div
      className={`icon__container ${className}`}
      onClick={onClick}
      onMouseEnter={onHover}
      data-testid="icon-container"
    >
      <i data-testid={"icon-component"} className={`icon ${iconClassname}`} />
    </div>
  );
};

ComplexIcon.propTypes = complexIconTypes;

const ComplexIconWithStyles = withTextClassname(ComplexIcon);
ComplexIconWithStyles.propTypes = complexIconTypes;
export default ComplexIconWithStyles;
