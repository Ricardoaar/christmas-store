import PropTypes from "prop-types";

export const cardContainersProptypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export const cardPropTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(["horizontal", "vertical"])
};
