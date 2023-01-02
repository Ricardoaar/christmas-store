import PropTypes from "prop-types";
import { textTypes } from "@components/atoms/Text/Text.types";

export const headingTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  ...textTypes
};
