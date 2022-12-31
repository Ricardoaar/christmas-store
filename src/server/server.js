import express from "express";

import { setupServerByEnv } from "./helpers/setupServer.js";
import { renderApp } from "./helpers/renderer";

const { PORT = 3000 } = process.env;

const app = express();

setupServerByEnv(app);
app.get("*", renderApp);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});