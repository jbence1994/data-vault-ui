import React from "react";

const DateInput: React.FC<DateInputProps> = ({
  name,
  value,
  labelText,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{labelText}</label>
      <input
        type="date"
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default DateInput;
