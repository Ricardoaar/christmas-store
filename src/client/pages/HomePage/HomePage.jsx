import React from "react";
import PageContent from "@pages/shared/PageContent/PageActions";
import LayoutElements from "@pages/shared/ElementsLayout/LayoutElements";
import { fetchProducts } from "@client/redux/reducers/products/actions";
import { connect } from "react-redux";
import { ListProducts } from "@pages/shared/ElementsLayout/ProductsList";
import { homePageTypes } from "@pages/HomePage/HomePage.types";

const ListComponentByLayout = {
  list: ListProducts,
  card: () => "ola"
};

const HomePage = ({ products }) => {
  const LayoutComponent = ListComponentByLayout["list"];
  return (
    <>
      <PageContent>
        {({ layout }) => {
          return (
            <LayoutElements
              className={`product__layout--${layout}`}
              entities={products.entities}
              layout={layout}
              render={(entities = []) => {
                return entities.map(({ ...layoutProps }) => {
                  return (
                    <LayoutComponent
                      {...layoutProps}
                      layout={layout}
                      key={layoutProps.title}
                    />
                  );
                });
              }}
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
