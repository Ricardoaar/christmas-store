import PropTypes from "prop-types";

export const stackSpacingCLasses = {
  tight: "tight",
  normal: "normal",
  wide: "wide",
  xWide: "x-wide"
};

export const stackPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
