import React, { useMemo } from "react";
import generateClassName from "@client/utils/classNameGenerator";
import {
  StackDirections,
  stackPropTypes,
  StackTypes
} from "@components/layouts/Stack/Stack.types";

function Stack({
  children,
  direction = StackDirections.vertical,
  type = StackTypes.normal,
  className = "",
  tag = "div",
  childTag = "div",
  childClassname = "",
  noChildContainer
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

  return React.createElement(
    tag,
    { className: `${stackClassName} ${className}` },
    React.Children.map(children, child => {
      return noChildContainer
        ? child
        : React.createElement(
            childTag,
            { className: `stack__element ${childClassname}` },
            child
          );
    })
  );
}

Stack.propTypes = stackPropTypes;

export default Stack;
