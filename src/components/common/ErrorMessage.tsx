import React from "react";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className="alert alert-danger">{message}</div>;
};

export default ErrorMessage;
