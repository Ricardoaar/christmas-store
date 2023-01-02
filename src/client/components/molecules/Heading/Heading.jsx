import React from "react";

import Text from "@components/atoms/Text/Text";

import { getHeadingByLevel } from "@components/molecules/Heading/Heading.utils";
import { headingTypes } from "@components/molecules/Heading/Heading.types";

const Heading = ({ level = 3, children, ...textProps }) => {
  const tag = getHeadingByLevel(level);

  return (
    <Text tag={tag} {...textProps}>
      {children}
    </Text>
  );
};

Heading.propTypes = headingTypes;

export default Heading;
