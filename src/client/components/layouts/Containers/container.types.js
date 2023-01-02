import PropTypes from "prop-types";

export const ContainerTypes = {
  fixed: "fixed",
  fluid: "fluid"
};

export const containerProptypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.values(ContainerTypes)),
  className: PropTypes.string
};
