import React from "react";

import ErrorMessage from "./ErrorMessage";

const Dropdown: React.FC<DropdownProps> = ({
  name,
  value,
  firstOptionText,
  labelText,
  data,
  errorMessage,
  onChange,
}) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label>{labelText}</label>
        <select
          className="form-control"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value={0}>{firstOptionText}</option>
          {data.map((item: KeyValuePair<string, string>) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </React.Fragment>
  );
};

export default Dropdown;
