import PropTypes from "prop-types";

export const DropdownTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
export const DropdownItemsTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export const DropdownTitleTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node
};

export const DropdownMenuTypes = {
  children: PropTypes.node
};
