import React, { useMemo } from "react";
import Stack from "@components/layouts/Stack/Stack";

import {
  StackDirections,
  StackTypes
} from "@components/layouts/Stack/Stack.types";

import Heading from "@components/molecules/Heading/Heading";
import Container from "@components/layouts/Containers/ContainerFluid";
import Icon from "@components/atoms/Icon/Icon";

import { generateFontAwesomeIconClassname } from "@client/utils/generateFontAwesomeIcon";
import { headerProptypes } from "@pages/shared/Header/Header.propTypes";

const Header = ({ title, icon: rawIconName }) => {
  const icon = useMemo(
    () => generateFontAwesomeIconClassname(rawIconName),
    [rawIconName]
  );
  return (
    <Container className={"header"}>
      <Stack type={StackTypes.xWide} direction={StackDirections.horizontal}>
        <Heading level={1} weight={"bold"} size={"xxl"} color={"content"}>
          {title}
        </Heading>
        <Icon className={`header__icon ${icon}`}></Icon>
      </Stack>
    </Container>
  );
};

Header.propTypes = headerProptypes;
export default Header;
