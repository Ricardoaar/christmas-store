import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "@components/molecules/Heading/Heading";

const TestComponent = ({ level, children }) => {
  return <Heading level={level}>{children}</Heading>;
};

describe("TestComponent", () => {
  test.each(Array.from({ length: 6 }, (_, i) => i + 1))(
    "Should create a tag h%d",
    level => {
      render(<TestComponent level={level}>Test</TestComponent>);
      expect(screen.getByRole("heading", { level })).toBeInTheDocument();
    }
  );

  test.each([0, 19])(
    "Should return default tag when level is not between 1 and 6 -> h%d",
    wrongLevel => {
      render(<TestComponent level={wrongLevel}>Test</TestComponent>);
      expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
    }
  );
});
