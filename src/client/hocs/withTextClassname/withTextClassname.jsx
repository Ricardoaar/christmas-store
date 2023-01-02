import React, { useMemo } from "react";
import {
  TextClassName,
  TextSizes,
  TextWeights
} from "@components/atoms/Text/Text.constants";
import { ThemeColors } from "@client/Theme/constants";
import generateClassName from "@client/utils/classNameGenerator";
import { textTypes } from "@components/atoms/Text/Text.types";

const withTextClassname = Component => {
  const ComponentWithTextClassname = function ComponentWithText({
    size = TextSizes.MD,
    weight = TextWeights.MEDIUM,
    color = ThemeColors.textDefault,
    className: rawClassname = "",
    ...props
  }) {
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

    return <Component className={className} {...props} />;
  };
  ComponentWithTextClassname.propTypes = textTypes;
  return ComponentWithTextClassname;
};

export default withTextClassname;
