import React from "react";
import PropTypes from "prop-types";
import { useMemo } from "react";

const withEntityFilter = Component => {
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

export default withEntityFilter;
