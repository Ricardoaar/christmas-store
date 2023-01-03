import React from "react";
import Stack from "@components/layouts/Stack/Stack";
import Container from "@components/layouts/Containers/ContainerFluid";
import { ContainerTypes } from "@components/layouts/Containers/container.types";
import {
  StackDirections,
  StackTypes
} from "@components/layouts/Stack/Stack.types";
import { Link } from "react-router-dom";
import Paragraph from "@components/molecules/Paragraph/Paragraph";

const NavigationBar = () => {
  return (
    <Container
      type={ContainerTypes.fluid}
      className={"navigation-bar"}
      tag={"section"}
    >
      <Stack
        type={StackTypes.xWide}
        direction={StackDirections.horizontal}
        tag={"ul"}
        childTag={"li"}
      >
        <Link to={"/"}>
          <Paragraph color={"content"} weight={"bold"} size={"md"}>
            Store
          </Paragraph>
        </Link>
        {/*<Link to={"/favorites"}>*/}
        {/*  <Paragraph color={"content"} weight={"bold"} size=v{"md"}>*/}
        {/*    Favorites*/}
        {/*  </Paragraph>*/}
        {/*</Link>*/}
      </Stack>
    </Container>
  );
};

export default NavigationBar;
