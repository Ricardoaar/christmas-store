import PropTypes from "prop-types";

export const textInputTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  initialValue: PropTypes.string,
  control: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func
  })
};
