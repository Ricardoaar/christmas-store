import express from "express";

import { setupServerByEnv } from "./helpers/setupServer.js";
import { renderApp } from "./helpers/renderer";

const { PORT = 3000, ENV } = process.env;

const app = express();

setupServerByEnv(app, ENV);
app.get("*", renderApp);

// app.get("/favicon.ico", (req, res) => res.status(204));
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
