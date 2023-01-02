import React from "react";
import withTextClassname from "@client/hocs/withTextClassname/withTextClassname";
import { cardContainersProptypes } from "@components/atoms/Card/Card.types";

const CardHeader = ({ children, className, ...props }) => (
  <div {...props} className={`${className} card__header`}>
    {children}
  </div>
);

const CardHeaderWithTextClassname = withTextClassname(CardHeader);

CardHeader.propTypes = cardContainersProptypes;

export default CardHeaderWithTextClassname;
