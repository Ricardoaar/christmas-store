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
    <Container type={ContainerTypes.fluid} className={"navigation-bar"}>
      <ul>
        <Stack type={StackTypes.xWide} direction={StackDirections.horizontal}>
          <li>
            <Link to={"/"}>
              <Paragraph color={"content"} weight={"bold"} size={"md"}>
                Store
              </Paragraph>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Paragraph color={"content"} weight={"bold"} size={"md"}>
                Favorites
              </Paragraph>
            </Link>
          </li>
        </Stack>
      </ul>
    </Container>
  );
};

export default NavigationBar;
