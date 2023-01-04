// Libraries
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";

// Components
import { ThemeContextProvider } from "@client/./Theme/context/ThemeContext";
import { AppRoutes } from "@client/routing/AppRoutes";

// Utils & Redux
import { combinedReducers } from "@client/redux";
import Container from "@components/layouts/Containers/ContainerFluid";
import Header from "@pages/shared/Header/Header";
import NavigationBar from "@pages/shared/NavigationBar/NavigationBar";
import React from "react";
import useTheme from "@client/Theme/hooks/useTheme";

const history = createBrowserHistory();

const store = configureStore({
  reducer: combinedReducers,
  middleware: [thunk],
  preloadedState: window.__PRELOADED_STATE__
});

const iconsBYTheme = {
  christmas: "holly-berry",
  halloween: "ghost"
};

const AppHeader = () => {
  const { theme } = useTheme();

  return (
    <Container type={"fluid"} tag={"header"}>
      <Header title={"Super Store"} icon={iconsBYTheme[theme]} />
      <NavigationBar />
    </Container>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <BrowserRouter history={history}>
          <AppHeader />
          <AppRoutes />
        </BrowserRouter>
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
