import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
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
    handleInputChange,
    autoComplete,
    dataList,
    disabled
  } = props;
  return !autoComplete ? (
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
      disabled={disabled}
    />
  ) : (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={dataList.map(option => option.name)}
      renderInput={params => (
        <TextField
          {...params}
          label="freeSolo"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
};
