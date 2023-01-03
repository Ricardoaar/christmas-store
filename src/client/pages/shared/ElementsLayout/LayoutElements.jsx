import React from "react";
import Stack from "@components/layouts/Stack/Stack";
import { StackTypes } from "@components/layouts/Stack/Stack.types";

const ListLayout = ({ children, className }) => {
  return (
    <Stack
      direction={"vertical"}
      type={StackTypes.normal}
      className={className}
      tag={"section"}
      noChildContainer
    >
      {children}
    </Stack>
  );
};
const CardLayout = ({ children, clasName: className }) => {
  return (
    <Stack
      direction={"horizontal"}
      type={StackTypes.normal}
      className={className}
      tag={"section"}
      noChildContainer
    >
      {children}
    </Stack>
  );
};

const ComponentsByLayout = {
  list: ListLayout,
  card: CardLayout
};

const LayoutElements = ({ layout, entities = [], render, className }) => {
  const LayoutComponent = ComponentsByLayout[layout];

  return (
    <LayoutComponent className={className}>{render(entities)}</LayoutComponent>
  );
};

export default LayoutElements;
