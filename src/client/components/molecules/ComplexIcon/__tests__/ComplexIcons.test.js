import React from "react";
import ComplexIcon from "@components/molecules/ComplexIcon/ComplexIcon";
import { complexIconTypes } from "@components/molecules/ComplexIcon/ComplexIcon.types";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const TestComponent = ({ icon, onClick, onHover, className }) => {
  return (
    <ComplexIcon
      icon={icon}
      onClick={onClick}
      onHover={onHover}
      className={className}
    />
  );
};

TestComponent.propTypes = complexIconTypes;

describe("ComplexIcon", function () {
  test.each(["envelope", "test"])(
    "Should render icon with className fa-%s",
    testValue => {
      render(<TestComponent icon={testValue} />);
      const element = screen.getByTestId("icon-component");
      expect(element).toHaveClass(`fa-${testValue}`);
    }
  );

  test("Should call onClick when its given and its clicked", async () => {
    const onClick = jest.fn();
    render(<TestComponent onClick={onClick} />);
    const element = screen.getByTestId("icon-component");
    await userEvent.click(element);
    expect(onClick).toHaveBeenCalled();
  });

  test("Should call on hover when its given and its hovered", async () => {
    const onHover = jest.fn();
    render(<TestComponent onHover={onHover} />);
    const element = screen.getByTestId("icon-component");
    await userEvent.hover(element);
    expect(onHover).toHaveBeenCalled();
  });

  test("Should add classname to icon container", () => {
    const className = "test";
    render(<TestComponent className={className} />);
    const element = screen.getByTestId("icon-container");
    expect(element).toHaveClass(className);
  });
});
