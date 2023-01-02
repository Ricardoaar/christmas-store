import { dropdownListProptypes } from "@components/molecules/DropdownList/DropdownList.types";
import DropdownList from "@components/molecules/DropdownList/DropdownList";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultPlaceholder = "Test Placeholder";

const TestComponent = ({
  placeholder = defaultPlaceholder,
  options = [],
  initialSelected,
  onChange,
  value,
  className
}) => {
  return (
    <DropdownList
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      initialSelected={initialSelected}
      value={value}
      className={className}
    />
  );
};

TestComponent.propTypes = dropdownListProptypes;

describe("Dropdown Menu", function () {
  test("Should render placeholder when no initial selected", () => {
    render(<TestComponent />);

    const dropdownTitle = screen.getByText(defaultPlaceholder);
    expect(dropdownTitle).toBeInTheDocument();
  });

  test("Should render initial option if it exists", () => {
    const options = [{ value: "test", label: "test" }];
    const initialSelected = "test";
    render(
      <TestComponent options={options} initialSelected={initialSelected} />
    );

    const dropdownTitle = screen.getByText(initialSelected);
    expect(dropdownTitle).toBeInTheDocument();
  });

  test("Should render placeholder if selected options doesnt exists", () => {
    const options = [{ value: "test", label: "test" }];
    const initialSelected = "test2";
    render(
      <TestComponent options={options} initialSelected={initialSelected} />
    );

    const dropdownTitle = screen.getByText(defaultPlaceholder);
    expect(dropdownTitle).toBeInTheDocument();
  });

  test("Should render option labels when clicking title", async () => {
    const options = [{ value: "test", label: "test" }];
    render(<TestComponent options={options} />);

    const dropdownTitle = screen.getByText(defaultPlaceholder);
    await userEvent.click(dropdownTitle);

    const optionLabel = screen.getByText(options[0].label);
    expect(optionLabel).toBeInTheDocument();
  });

  test("Should call on change when clicking on option", async () => {
    const options = [{ value: "test", label: "test" }];
    const onChange = jest.fn();
    render(<TestComponent options={options} onChange={onChange} />);

    const dropdownTitle = screen.getByText(defaultPlaceholder);
    await userEvent.click(dropdownTitle);
    const optionLabel = await screen.findByText(options[0].label);

    await userEvent.click(optionLabel);

    await waitFor(() =>
      expect(onChange).toHaveBeenCalledWith(options[0].value)
    );
  });

  test("Should render initial selected if its in options", () => {
    const options = [{ value: "test", label: "test" }];
    const initialSelected = "test";
    render(
      <TestComponent options={options} initialSelected={initialSelected} />
    );

    const dropdownTitle = screen.getByText(initialSelected);
    expect(dropdownTitle).toBeInTheDocument();
  });

  test("Should have given classname", () => {
    const options = [{ value: "test", label: "test" }];
    const className = "test-class";
    render(<TestComponent options={options} className={className} />);

    const dropdown = screen.getByTestId("dropdown-list");
    expect(dropdown).toHaveClass(className);
  });

  test("Should change value when value prop changes", () => {
    const options = [
      { value: "test", label: "test" },
      { value: "test2", label: "test2" }
    ];
    const value = "test";
    const { rerender } = render(
      <TestComponent options={options} value={value} />
    );

    const dropdownTitle = screen.getByText(value);
    expect(dropdownTitle).toBeInTheDocument();

    const newValue = "test2";
    rerender(<TestComponent options={options} value={newValue} />);

    const newDropdownTitle = screen.getByText(newValue);
    expect(newDropdownTitle).toBeInTheDocument();
  });
});
