import React from "react";

import ErrorMessage from "./ErrorMessage.tsx";

const TextInput: React.FC<TextInputProps> = ({
  type,
  name,
  value,
  labelText,
  maxLength = 255,
  errorMessage = "",
  onChange,
}) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={name}>{labelText}</label>
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          value={value}
          minLength={0}
          maxLength={maxLength}
          onChange={onChange}
        />
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </React.Fragment>
  );
};

export default TextInput;
