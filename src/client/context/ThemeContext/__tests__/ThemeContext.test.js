import { useContext } from "react";
import PropTypes from "prop-types";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import {
  ThemeContext,
  ThemeContextProvider
} from "@client/context/ThemeContext";

import {
  initialThemeState,
  THEMES
} from "@client/context/ThemeContext/ThemeContext.constants";

const testProps = {
  nextThemeName: PropTypes.string
};

const BaseComponent = ({ nextThemeName = THEMES.christmas }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button data-testid="toggle" onClick={() => setTheme(nextThemeName)} />
    </div>
  );
};
const TestComponent = ({ nextThemeName }) => {
  return (
    <ThemeContextProvider>
      <BaseComponent nextThemeName={nextThemeName} />
    </ThemeContextProvider>
  );
};

BaseComponent.propTypes = testProps;
TestComponent.propTypes = testProps;

describe("Theme Context", function () {
  test("Should switch theme when setTheme is called", function () {
    render(<TestComponent />);
    const theme = screen.getByTestId("theme");

    const toggle = screen.getByTestId("toggle");

    userEvent.click(toggle);
    expect(theme).toHaveTextContent(THEMES.christmas);
  });

  test("Theme should not change when setTheme is called with a wrong theme name", function () {
    render(<TestComponent nextThemeName="wrong" />);
    const theme = screen.getByTestId("theme");
    const toggle = screen.getByTestId("toggle");
    userEvent.click(toggle);
    expect(theme).toHaveTextContent(initialThemeState.theme);
  });
});
