import React from "react";
import Stack from "@components/layouts/Stack/Stack";
import { StackDirections, StackTypes } from "@components/layouts/Stack/Stack.types";
import Heading from "@components/molecules/Heading/Heading";
import Container from "@components/layouts/Containers/ContainerFluid";
import Icon from "@components/atoms/Icon/Icon";

const Header = () => {
  return (
    <Container className={"header"}>
      <Stack type={StackTypes.xWide} direction={StackDirections.horizontal}>
        <Heading level={1} weight={"bold"} size={"xxl"} color={"content"}>
          Super Store
        </Heading>
        <Icon className={"header__icon fa-solid fa-holly-berry"}></Icon>
      </Stack>
    </Container>
  );
};

export default Header;
