// Libraries
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

// Components
import { AppRoutes } from "@client/routing/AppRoutes";
import { ThemeContextProvider } from "@client/context/ThemeContext";

const buildInitialReactAsHtml = location => {
  return renderToString(
    <ThemeContextProvider>
      <StaticRouter location={location} context={{}}>
        <AppRoutes />
      </StaticRouter>
    </ThemeContextProvider>
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
    mainStylesLocation: `${hashManifest["main.css"]}`,
    mainBuildLocation: `${hashManifest["main.js"]}`,
    vendorScriptHtml: `<script src="${hashManifest["vendors.js"]}" type="text/javascript"></script>`
  };
};

const renderFullPage = (location, store, hashManifest) => {
  const reactHtml = buildInitialReactAsHtml(location, store);
  const { mainStylesLocation, mainBuildLocation, vendorScriptHtml } =
    getFilesByHashManifest(hashManifest);

  return `
      <html lang="en">
      <head>
        <title>Ricardoaar Store</title>
        <link rel="stylesheet" href="${mainStylesLocation}">
      </head>
      <body>
        <div id="root">${reactHtml}</div>
        <script src="${mainBuildLocation}" type="text/javascript"></script>
        ${vendorScriptHtml}
      </body>
      </html>
    `;
};

export const renderApp = (req, res) => {
  res.send(renderFullPage(req.path, req.hashManifest));
};
