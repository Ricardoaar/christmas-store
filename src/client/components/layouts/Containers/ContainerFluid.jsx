import React, { useMemo } from "react";
import generateClassName from "@client/utils/classNameGenerator";
import {
  containerProptypes,
  ContainerTypes
} from "@components/layouts/Containers/container.types";

const Container = ({
  type = ContainerTypes.fixed,
  className = "",
  children,
  tag = "div"
}) => {
  const containerClassname = useMemo(
    () =>
      generateClassName("container", [
        {
          elementConjunction: "modifier",
          elementName: type
        }
      ]),
    [type]
  );
  return React.createElement(
    tag,
    { className: `${containerClassname} ${className}` },
    children
  );
};
Container.propTypes = containerProptypes;
export default Container;
