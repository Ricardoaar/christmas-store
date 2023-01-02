import React from "react";

import withTextClassname from "@client/hocs/withTextClassname/withTextClassname";
import { useControlProps } from "@client/hooks/useControlledProps";
import { textInputTypes } from "@components/atoms/inputs/TextInput.types";

const TextInputBase = ({
  className,
  placeholder,
  initialValue = "",
  control = {},
  ...inputProps
}) => {
  const { value, onChange } = useControlProps(initialValue, control);

  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...inputProps}
    />
  );
};

TextInputBase.propTypes = textInputTypes;

const TextInput = withTextClassname(TextInputBase);
TextInput.propTypes = textInputTypes;
export default TextInput;
