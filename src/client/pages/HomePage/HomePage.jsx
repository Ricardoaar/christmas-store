import React, { useEffect } from "react";
import PageContent from "@pages/shared/PageContent/PageActions";
import LayoutElements from "@pages/shared/ElementsLayout/LayoutElements";
import { fetchProducts } from "@client/redux/reducers/products/actions";
import { connect } from "react-redux";
import { ListProducts } from "@pages/shared/ElementsLayout/ProductsList";
import { homePageTypes } from "@pages/HomePage/HomePage.types";
import CardLayout from "@pages/shared/ElementsLayout/CardLayout";

const ListChildComponentsByLayout = {
  list: ListProducts,
  card: CardLayout
};

const HomePage = ({ products, fetchProducts }) => {
  useEffect(() => {
    // If cache is applied in backend
    fetchProducts();
  }, []);

  return (
    <>
      <PageContent>
        {({ layout, sortBy, filter }) => {
          return (
            <LayoutElements
              className={`product__layout--${layout}`}
              filter={filter}
              sortBy={sortBy}
              entities={products.entities}
              layout={layout}
              childComponentsByLayout={ListChildComponentsByLayout}
            />
          );
        }}
      </PageContent>
    </>
  );
};

export const onLoadHomePage = store => {
  return store.dispatch(fetchProducts());
};

const ConnectedHomePage = connect(state => ({ products: state.products }), {
  fetchProducts
})(HomePage);

HomePage.propTypes = homePageTypes;
export default ConnectedHomePage;
