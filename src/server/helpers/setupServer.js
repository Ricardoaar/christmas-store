import webpack from "webpack";
import express from "express";
import helmet from "helmet";

import { requireManifest } from "../middlewares/manifestMiddleware";

const setupDevelopmentServer = app => {
  // Import only in development mode
  const webpackConfig = require("../../../webpack/webpack.development.js");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");

  // Setup compiler
  const compiler = webpack(webpackConfig);
  const serverConfig = { serverSideRender: true };

  // Setup app
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
};

const setupProductionServer = app => {
  app.use(requireManifest);
  app.use(express.static(`${__dirname}/../public`));

  // Middlewares to improve security
  app.use(helmet.permittedCrossDomainPolicies());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.xssFilter());
};

const setups = {
  development: setupDevelopmentServer,
  production: setupProductionServer
};

export const setupServerByEnv = (app, env = "development") => {
  if (!Object.keys(setups).includes(env))
    console.error(
      `Not found a setup for ${env} env, using production env instead`
    );

  const setupServer = setups[env] || setups["production"];

  return setupServer(app);
};
