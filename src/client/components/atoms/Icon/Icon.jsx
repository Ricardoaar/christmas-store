import React from "react";
import withTextClassname from "@client/hocs/withTextClassname/withTextClassname";
import PropTypes from "prop-types";

const Icon = ({ className }) => {
  return <i data-testid={"icon-component"} className={`icon ${className}`} />;
};

const IconComponent = withTextClassname(Icon);

Icon.propTypes = {
  className: PropTypes.string
};
IconComponent.propTypes = {
  className: PropTypes.string
};

export default IconComponent;
