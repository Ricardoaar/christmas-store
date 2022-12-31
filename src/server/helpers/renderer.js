import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { AppRoutes } from "../../client/routing/AppRoutes";
import React from "react";

const buildInitialReactAsHtml = location => {
  return renderToString(
    <StaticRouter location={location} context={{}}>
      <AppRoutes />
    </StaticRouter>
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
