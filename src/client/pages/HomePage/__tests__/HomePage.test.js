import React from "react";
import { ThemeContextProvider } from "@client/Theme/context/ThemeContext";

import { AppRoutes } from "@client/routing/AppRoutes";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { combinedReducers } from "@client/redux";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const history = createBrowserHistory();

const TestComponent = () => {
  const store = configureStore({
    reducer: combinedReducers
  });
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

describe("HomePage", function () {
  beforeEach(() => {
    history.push("/");
  });
  test("should render search bar", () => {
    render(<TestComponent />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });

  test("Should render theme dropdown", () => {
    render(<TestComponent />);
    expect(screen.getByText(/Christmas/i)).toBeInTheDocument();
  });
  test("Should show theme options in dropdown theme", async () => {
    render(<TestComponent />);

    const dropdown = screen.getByText(/Christmas/i);
    await userEvent.click(dropdown);
    expect(screen.getByText(/Halloween/i)).toBeInTheDocument();
  });

  test("Should change icon in dropdown when changing theme", async () => {
    render(<TestComponent />);

    const dropdown = screen.getByText(/Christmas/i);
    await userEvent.click(dropdown);
    await userEvent.click(screen.getByText(/Halloween/i));

    const dropdownIcon = screen
      .getAllByTestId("icon-component")
      .find(element => {
        return element.classList.contains("fa-cat");
      });

    expect(dropdownIcon).toBeInTheDocument("fa-cat");
  });

  test("Should render as many products as given", async () => {
    render(<TestComponent />);
    const product1 = await screen.findAllByRole("heading", {
      level: 4,
      name: "Handmade Fresh Table"
    });

    expect(product1).not.toHaveLength(0);
  });

  //Todo: Fake api -> constants for api calls -> test sort by and filter by
});
