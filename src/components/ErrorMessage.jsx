import React from "react";
import "./form.css";

const ErrorMessage = ({ children }) => (
  <div className="form-error" role="alert" aria-live="polite">
    {children}
  </div>
);

export default ErrorMessage;
