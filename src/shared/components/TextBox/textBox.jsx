import * as React from "react";
import TextField from "@material-ui/core/TextField";
export const TextBox = props => {
  const {
    required,
    variant,
    type,
    placeholder,
    label,
    id,
    margin,
    fullWidth,
    name,
    error,
    helperText,
    value,
    handleInputChange
  } = props;
  return (
    <TextField
      error={error}
      helperText={helperText}
      value={value}
      variant={variant}
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      name={name}
      label={label}
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={event => handleInputChange(event)}
    ></TextField>
  );
};
