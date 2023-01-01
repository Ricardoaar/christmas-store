// Libraries
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";

// Components
import { ThemeContextProvider } from "@client/context/ThemeContext";
import { AppRoutes } from "@client/routing/AppRoutes";

// Utils & Redux
import { combinedReducers } from "@client/redux";

const history = createBrowserHistory();

const store = configureStore({
  reducer: combinedReducers,
  middleware: [thunk],
  preloadedState: window.__PRELOADED_STATE__
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <BrowserRouter history={history}>
          <AppRoutes />
        </BrowserRouter>
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
