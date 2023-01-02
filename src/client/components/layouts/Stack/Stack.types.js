import PropTypes from "prop-types";

export const StackTypes = {
  tight: "tight",
  normal: "normal",
  wide: "wide",
  xWide: "x-wide"
};

export const StackDirections = {
  horizontal: "horizontal",
  vertical: "vertical"
};

export const stackPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf(Object.values(StackDirections)),
  type: PropTypes.oneOf(Object.values(StackTypes))
};
