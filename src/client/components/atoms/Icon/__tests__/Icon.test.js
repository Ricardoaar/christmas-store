import React from "react";
import PropTypes from "prop-types";

import IconComponent from "@components/atoms/Icon/Icon";
import { render, screen } from "@testing-library/react";

const TestComponent = ({ className }) => {
  return <IconComponent className={className} />;
};
TestComponent.propTypes = { className: PropTypes.string };

describe("IconComponent", function () {
  test("Should add classname to icon container", () => {
    const className = "test";
    render(<TestComponent className={className} />);
    const element = screen.getByTestId("icon-component");
    expect(element).toHaveClass(className);
  });
});
