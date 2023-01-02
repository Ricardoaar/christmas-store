import React from "react";
import { textComponentTypes } from "@components/atoms/Text/Text.types";
import withTextClassname from "@client/hocs/withTextClassname/withTextClassname";

const BaseTextComponent = ({
  tag = "p",
  className,
  children,
  ...textProps
}) => {
  return React.createElement(tag, { className, ...textProps }, children);
};

const Text = withTextClassname(BaseTextComponent);
BaseTextComponent.propTypes = textComponentTypes;
Text.propTypes = textComponentTypes;

export default Text;
