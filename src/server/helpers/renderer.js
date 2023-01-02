// Libraries
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

// Components
import { AppRoutes, routes } from "@client/routing/AppRoutes";
import { ThemeContextProvider } from "@client/Theme/context/ThemeContext";
import { configureStore } from "@reduxjs/toolkit";
import { combinedReducers } from "@client/redux";
import thunk from "redux-thunk";
import { matchRoutes } from "react-router-dom";
import { Provider } from "react-redux";

const buildInitialReactAsString = (location, store) => {
  return renderToString(
    <Provider store={store}>
      <ThemeContextProvider>
        <StaticRouter location={location} context={{}}>
          <AppRoutes />
        </StaticRouter>
      </ThemeContextProvider>
    </Provider>
  );
};

const getFilesByHashManifest = hashManifest => {
  if (!hashManifest)
    return {
      mainStylesLocation: "assets/app.css",
      mainBuildLocation: "assets/app.js",
      vendorScriptHtml: ""
    };

  return {
    mainStylesLocation: `${hashManifest["vendors.css"]}`,
    mainBuildLocation: `${hashManifest["main.js"]}`,
    vendorScriptHtml: `<script src="${hashManifest["vendors.js"]}" type="text/javascript"></script>`
  };
};

const generateSecurePreloadedState = store => {
  const preloadedState = store.getState();
  return JSON.stringify(preloadedState).replace(/</g, "\\u003c");
};

const renderFullPage = (location, store, hashManifest) => {
  const view = buildInitialReactAsString(location, store);

  const { mainStylesLocation, mainBuildLocation, vendorScriptHtml } =
    getFilesByHashManifest(hashManifest);

  const preloadedState = generateSecurePreloadedState(store);

  return `
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ricardoaar Store</title>
        <link rel="stylesheet" href="${mainStylesLocation}">
        <link rel="preconnect" href="https://fonts.googleapis.com">
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;800&display=swap" rel="stylesheet">
      <script src="https://kit.fontawesome.com/681847d319.js" crossorigin="anonymous"></script>
        
      </head>
      <body>
      <script>
          window.__PRELOADED_STATE__ = ${preloadedState};
        </script>
        <div id="root">${view}</div>
        <script src="${mainBuildLocation}" type="text/javascript"></script>
        ${vendorScriptHtml}
      </body>
      </html>
    `;
};

const getPreloadRequestsPromises = (path, store) => {
  const matchedRoutes = matchRoutes(routes, path);
  return matchedRoutes?.map(({ route }) => route.onLoad?.(store));
};

export const renderApp = (req, res) => {
  const store = configureStore({
    reducer: combinedReducers,
    middleware: [thunk]
  });

  const preloadedRequestsPromises = getPreloadRequestsPromises(req.path, store);

  if (preloadedRequestsPromises?.length >= 1) {
    Promise.all(preloadedRequestsPromises).then(() => {
      res.send(renderFullPage(req.path, store, req.hashManifest));
    });
  } else res.send(renderFullPage(req.path, store, req.hashManifest));
};
