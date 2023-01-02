import React from "react";
import withTextClassname from "@client/hocs/withTextClassname/withTextClassname";
import { cardContainersProptypes } from "@components/atoms/Card/Card.types";

function CardFooter({ children, className, ...props }) {
  return (
    <div {...props} className={`card__footer ${className}`}>
      {children}
    </div>
  );
}

const CardFooterWithClassname = withTextClassname(CardFooter);
CardFooter.propTypes = cardContainersProptypes;
export default CardFooterWithClassname;
