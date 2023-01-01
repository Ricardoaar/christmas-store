import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  TextClassName,
  TextSizes,
  TextWeights
} from "@components/atoms/Text/Text.constants";
import generateClassName from "@client/utils/classNameGenerator";
import { ThemeColors } from "@client/Theme/constants";
import { textTypes } from "@components/atoms/Text/Text.types";

const Text = ({
  tag = "p",
  children,
  size = TextSizes.MD,
  weight = TextWeights.MEDIUM,
  color = ThemeColors.textDefault,
  className: rawClassname = "",
  ...textProps
}) => {
  const className = useMemo(() => {
    const elements = [
      {
        elementConjunction: "modifier",
        elementName: size
      },
      {
        elementConjunction: "modifier",
        elementName: weight
      },
      {
        elementConjunction: "modifier",
        elementName: color
      }
    ];

    return generateClassName(TextClassName, elements, {
      returnsString: true,
      removeBlockClass: true,
      appendClassname: rawClassname
    });
  }, [color, rawClassname, size, weight]);

  return React.createElement(tag, { className, ...textProps }, children);
};

Text.propTypes = textTypes;
export default Text;
