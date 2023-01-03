import PropTypes from "prop-types";

export const homePageTypes = {
  products: PropTypes.shape({
    entities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.any,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.shape({
          name: PropTypes.string.isRequired
        }).isRequired,
        images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        description: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};
