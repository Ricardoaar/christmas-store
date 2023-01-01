import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routing/AppRoutes";
import "./assets/styles/global.scss";
import { ThemeContextProvider } from "@client/context/ThemeContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter history={history}>
        <AppRoutes />
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

const root = document.querySelector("#root");

hydrateRoot(root, <App />);
