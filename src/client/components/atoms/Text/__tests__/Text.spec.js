import React from "react";
import { textTypes } from "@components/atoms/Text/Text.types";
import Text from "@components/atoms/Text/Text";
import { render, screen } from "@testing-library/react";

const TestComponent = ({ tag, children, size, weight, color, ...props }) => {
  return (
    <Text color={color} size={size} weight={weight} tag={tag} {...props}>
      {children}
    </Text>
  );
};

TestComponent.propTypes = textTypes;

describe("<Text/>", function () {
  test("Text should render children content", () => {
    const text = "Test Text";
    render(<TestComponent>{text}</TestComponent>);
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });

  test("Should have class name according with the size", function () {
    const text = "Test";

    render(
      <TestComponent tag={"h1"} size={"xxl"}>
        {text}
      </TestComponent>
    );

    expect(screen.getByText(text)).toHaveClass("text--xxl");
  });

  test("Should have class name according with the weight", function () {
    const text = "Test";

    render(
      <TestComponent tag={"h1"} weight={"bold"}>
        {text}
      </TestComponent>
    );

    expect(screen.getByText(text)).toHaveClass("text--bold");
  });

  test("Should have class name according with the color", function () {
    const text = "Test";

    render(
      <TestComponent tag={"h1"} color={"red"}>
        {text}
      </TestComponent>
    );

    expect(screen.getByText(text)).toHaveClass("text--red");
  });

  test("Should add properties to the tag element", () => {
    const text = "Test";

    render(
      <TestComponent tag={"h1"} data-testid="text">
        {text}
      </TestComponent>
    );

    expect(screen.getByTestId("text")).toBeInTheDocument();
  });

  test("Should have classes depending on the props", () => {
    const text = "Test";

    render(
      <TestComponent
        tag={"h1"}
        size={"xxl"}
        weight={"bold"}
        color={"red"}
        data-testid="text"
      >
        {text}
      </TestComponent>
    );

    expect(screen.getByTestId("text")).toHaveClass(
      "text--xxl text--bold text--red"
    );
  });

  test("Should call onClick if its given", () => {
    const text = "Test";
    const onClick = jest.fn();

    render(
      <TestComponent tag={"h1"} onClick={onClick}>
        {text}
      </TestComponent>
    );

    screen.getByText(text).click();

    expect(onClick).toHaveBeenCalled();
  });
});
