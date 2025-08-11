import React from "react";
import "./form.css";

const Input = ({ label, id, error, children, ...props }) => {
  const inputId = id || props.name;

  return (
    <div style={{ marginBottom: 18 }}>
      <label htmlFor={inputId} className="form-label">
        {label}
      </label>
      {children}
      <input
        id={inputId}
        aria-required={props.required}
        aria-invalid={!!props["aria-invalid"]}
        aria-describedby={`${inputId}-error`}
        className={`form-input${error ? " error" : ""}`}
        {...props}
      />
    </div>
  );
};

export default Input;
