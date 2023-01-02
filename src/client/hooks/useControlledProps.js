import { useCallback, useEffect, useState } from "react";

export const useControlProps = (initialValue = "", control) => {
  const [value, setValue] = useState(initialValue);
  const { value: controlledValue, onChange: controlledOnChange } = control;

  useEffect(() => {
    if (controlledValue) setValue(controlledValue);
  }, [controlledValue]);

  const onChange = useCallback(
    event => {
      const { value } = event.target;
      controlledOnChange?.(value);
      setValue(value);
    },
    [controlledOnChange]
  );

  return { value, onChange };
};
