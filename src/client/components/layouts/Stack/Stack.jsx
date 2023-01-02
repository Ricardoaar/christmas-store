import React, { useMemo } from "react";
import generateClassName from "@client/utils/classNameGenerator";
import {
  StackDirections, stackPropTypes,
  StackTypes
} from "@components/layouts/Stack/Stack.types";

function Stack({
  children,
  direction = StackDirections.vertical,
  type = StackTypes.normal,
  className = ""
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
    <div className={`${stackClassName} ${className}`}>
      {React.Children.map(children, child => (
        <div className={"stack__element"}>{child}</div>
      ))}
    </div>
  );
}

Stack.propTypes = stackPropTypes;

export default Stack;
