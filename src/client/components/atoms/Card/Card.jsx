import React, { useMemo } from "react";

import CardBody from "@components/atoms/Card/CardBody";
import CardFooter from "@components/atoms/Card/CardFooter";
import CardHeader from "@components/atoms/Card/CardHeader";

import { cardPropTypes } from "@components/atoms/Card/Card.types";
import generateClassName from "@client/utils/classNameGenerator";

const Card = ({ children, direction, layout = "normal" }) => {
  const className = useMemo(
    () =>
      generateClassName("card", [
        {
          elementConjunction: "modifier",
          elementName: direction
        },
        {
          elementConjunction: "modifier",
          elementName: layout
        }
      ]),
    [direction, layout]
  );

  return <div className={className}>{children}</div>;
};

Card.propTypes = cardPropTypes;

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;

export default Card;
