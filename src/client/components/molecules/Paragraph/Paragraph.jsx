import React from "react";

import Text from "@components/atoms/Text/Text";

import { paragraphTypes } from "@components/molecules/Paragraph/Paragraph.types";
import { getParagraphProps } from "@components/molecules/Paragraph/Paragraph.utils";

const Paragraph = ({ children, textProps }) => {
  const props = getParagraphProps(children, textProps);

  return (
    <Text tag={"p"} {...props}>
      {children}
    </Text>
  );
};

Paragraph.propTypes = paragraphTypes;

export default Paragraph;
