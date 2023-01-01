import "./assets/styles/global.scss";
import { hydrateRoot } from "react-dom/client";
import App from "@client/App";

const root = document.querySelector("#root");

hydrateRoot(root, <App />);
