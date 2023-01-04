import React, { useMemo } from "react";
import PropTypes from "prop-types";

const withSortBy = Component => {
  const ComponentWithSortBy = ({ entities = [], sortBy, asc, ...props }) => {
    const sortedEntities = useMemo(() => {
      if (!sortBy) return entities;
      return [...entities].sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return asc ? 1 : -1;
        }
        if (a[sortBy] < b[sortBy]) {
          return asc ? -1 : 1;
        }
        return 0;
      });
    }, [entities, sortBy, asc]);
    return <Component {...props} entities={sortedEntities} />;
  };
  ComponentWithSortBy.propTypes = {
    entities: PropTypes.array.isRequired,
    sortBy: PropTypes.string
  };

  return ComponentWithSortBy;
};
export default withSortBy;
