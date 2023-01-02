import React, { useMemo } from "react";
import generateClassName from "@client/utils/classNameGenerator";
import {
  containerProptypes,
  ContainerTypes
} from "@components/layouts/Containers/container.types";

const Container = ({
  type = ContainerTypes.fixed,
  className = "",
  children
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

  return <div className={`${containerClassname} ${className}`}>{children}</div>;
};
Container.propTypes = containerProptypes;
export default Container;
