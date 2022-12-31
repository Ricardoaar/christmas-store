import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routing/AppRoutes";
import "./assets/styles/global.scss";

const App = () => {
  return (
    <BrowserRouter history={history}>
      <AppRoutes />
    </BrowserRouter>
  );
};

const root = document.querySelector("#root");

hydrateRoot(root, <App />);
