// Libraries
import React from "react";
import { useRoutes } from "react-router-dom";

// Components
import HomePage from "@pages/HomePage/HomePage";
import { fetchUsersData } from "@client/redux/reducers/products/actions";

/*
 * This is the main routing file for the application.
 * It is used by both the server and the client.
 * The server:  uses it to determine which components to render before sending html to client.
 * The client:  uses it to determine which components to render and which components to hydrate.
 * Extra Params:
 * onLoad:  functions can be used to determine which data to load before rendering the component.
 * */
export const routes = [
  {
    path: "/",
    exact: true,
    element: <HomePage />,
    onLoad: store => store.dispatch(fetchUsersData())
  }
];

export const AppRoutes = () => {
  return useRoutes(routes);
};
