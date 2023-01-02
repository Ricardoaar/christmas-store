import TextInput from "@components/atoms/inputs/TextInput/TextInput";
import { textInputTypes } from "@components/atoms/inputs/TextInput/TextInput.types";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const TestComponent = ({ control, initialValue, placeholder, className }) => {
  return (
    <TextInput
      control={control}
      placeholder={placeholder}
      initialValue={initialValue}
      className={className}
    />
  );
};

TestComponent.propTypes = textInputTypes;

const testCasesTexts = ["cats", "test", "anything"];

describe("TextInput", function () {
  test.each(testCasesTexts)("should render with value %s", testValue => {
    render(<TestComponent control={{ value: testValue }} />);

    const element = screen.getByDisplayValue(testValue);
    expect(element).toBeInTheDocument();
  });

  test.each(testCasesTexts)("Should render placeholder %s", testValue => {
    render(<TestComponent placeholder={testValue} />);

    const element = screen.getByPlaceholderText(testValue);
    expect(element).toBeInTheDocument();
  });

  test.each(testCasesTexts)(
    "Should call on change when its given",
    async testValue => {
      const onChange = jest.fn();
      render(<TestComponent control={{ onChange }} />);

      const element = screen.getByRole("textbox");
      await userEvent.type(element, testValue);
      await waitFor(() => expect(onChange).toHaveBeenCalledWith(testValue));
    }
  );

  test.each(testCasesTexts)("Should have given className %s", testValue => {
    render(<TestComponent className={testValue} />);

    const element = screen.getByRole("textbox");
    expect(element).toHaveClass(testValue);
  });

  test("Should change local state when value changes even if onChange is not called", () => {
    const value = "test";
    const { rerender } = render(<TestComponent control={{ value }} />);
    const element = screen.getByRole("textbox");
    expect(element).toHaveValue(value);
    const value2 = "test2";
    rerender(<TestComponent control={{ value: value2 }} />);
    expect(element).toHaveValue(value2);
  });
});
