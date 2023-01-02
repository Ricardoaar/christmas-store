import React from "react";
import { cardContainersProptypes } from "@components/atoms/Card/Card.types";
import withTextClassname from "@client/hocs/withTextClassname/withTextClassname";

const CardBody = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`card__body ${className}`}>
      {children}
    </div>
  );
};

const CardBodyWithTextClassname = withTextClassname(CardBody);
CardBody.propTypes = cardContainersProptypes;
export default CardBodyWithTextClassname;
