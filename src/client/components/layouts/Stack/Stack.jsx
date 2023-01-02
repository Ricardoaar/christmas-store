import React, { useMemo } from "react";
import generateClassName from "@client/utils/classNameGenerator";
import {
  stackPropTypes,
  stackSpacingCLasses
} from "@components/layouts/Stack/Stack.types";

function Stack({
  children,
  direction = "horizontal",
  type = stackSpacingCLasses.normal
}) {
  const stackClassName = useMemo(
    () =>
      generateClassName("stack", [
        {
          elementConjunction: "modifier",
          elementName: type
        },
        {
          elementConjunction: "modifier",
          elementName: direction
        }
      ]),
    [direction, type]
  );

  return (
    <div className={stackClassName}>
      {React.Children.map(children, child => (
        <div className={"stack__element"}>{child}</div>
      ))}
    </div>
  );
}

Stack.propTypes = stackPropTypes;

export default Stack;
