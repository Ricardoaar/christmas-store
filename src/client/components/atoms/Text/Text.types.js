import PropTypes from "prop-types";
import { TextSizes, TextWeights } from "@components/atoms/Text/Text.constants";

export const textTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(TextSizes)),
  weight: PropTypes.oneOf(Object.values(TextWeights)),
  color: PropTypes.string,
  className: PropTypes.string
};

export const textComponentTypes = { ...textTypes, tag: PropTypes.string };
