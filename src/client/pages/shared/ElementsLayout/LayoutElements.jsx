import React, { useMemo } from "react";
import PropTypes from "prop-types";
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

const withEntityFiler = Component => {
  const ComponentWithEntityFilter = ({
    entities = [],
    filter,
    criteria = "title",
    ...props
  }) => {
    const filteredEntities = useMemo(() => {
      if (!filter) return entities;

      return [...entities].filter(entity => {
        const regex = new RegExp(filter, "i");
        return regex.test(entity[criteria]);
      });
    }, [criteria, entities, filter]);

    return <Component {...props} entities={filteredEntities} />;
  };
  ComponentWithEntityFilter.propTypes = {
    entities: PropTypes.array.isRequired,
    filter: PropTypes.string,
    criteria: PropTypes.string
  };

  return ComponentWithEntityFilter;
};

const withSortBy = Component => {
  const ComponentWithSortBy = ({ entities = [], sortBy, ...props }) => {
    const sortedEntities = useMemo(() => {
      if (!sortBy) return entities;

      return [...entities].sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        return 0;
      });
    }, [entities, sortBy]);
    return <Component {...props} entities={sortedEntities} />;
  };
  ComponentWithSortBy.propTypes = {
    entities: PropTypes.array.isRequired,
    sortBy: PropTypes.string
  };

  return ComponentWithSortBy;
};

export default withSortBy(withEntityFiler(LayoutElements));
