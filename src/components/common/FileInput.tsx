import React from "react";

const FileInput: React.FC<FileInputProps> = ({ name, disabled, onChange }) => {
  return (
    <input
      type="file"
      id={name}
      name={name}
      className="form-control-file"
      onChange={onChange}
      style={{
        position: "absolute",
        inset: "0",
        opacity: "0",
      }}
      disabled={disabled}
    />
  );
};

export default FileInput;
