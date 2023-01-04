import React from "react";
import PropTypes from "prop-types";
import Stack from "@components/layouts/Stack/Stack";
import { StackTypes } from "@components/layouts/Stack/Stack.types";
import withSortBy from "@client/hocs/withSortBy/withSortBy";
import withEntityFilter from "@client/hocs/withEntityFilter/withEntityFIlter";

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
const CardLayout = ({ children, className }) => {
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

ListLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const ComponentsByLayout = {
  list: ListLayout,
  card: CardLayout
};

const LayoutElements = ({
  layout,
  entities = [],
  className,
  childComponentsByLayout
}) => {
  const ChildComponent = childComponentsByLayout[layout];
  const LayoutComponent = ComponentsByLayout[layout];
  return (
    <LayoutComponent className={className}>
      {entities.map((entity, idx) => {
        return (
          <ChildComponent
            layout={layout}
            key={`${entity.title}-${idx}`}
            {...entity}
          />
        );
      })}
    </LayoutComponent>
  );
};

LayoutElements.propTypes = {
  layout: PropTypes.string.isRequired,
  entities: PropTypes.array.isRequired,
  className: PropTypes.string,
  childComponentsByLayout: PropTypes.object.isRequired
};

const SortableLayout = withEntityFilter(withSortBy(LayoutElements));

export default SortableLayout;
