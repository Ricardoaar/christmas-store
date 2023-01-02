import { useCallback, useEffect, useState } from "react";

const getValueFromEvent = event => {
  const { target } = event;
  return target.type === "checkbox" ? target.checked : target.value;
};

export const useControlProps = (
  initialValue = "",
  control = {},
  valueGetter = getValueFromEvent
) => {
  const [value, setValue] = useState(initialValue);
  const { value: controlledValue, onChange: controlledOnChange } = control;

  useEffect(() => {
    if (controlledValue) setValue(controlledValue);
  }, [controlledValue]);

  const onChange = useCallback(
    input => {
      const value = valueGetter(input);
      controlledOnChange?.(value);
      setValue(value);
    },
    [controlledOnChange, valueGetter]
  );

  return { value, onChange };
};
