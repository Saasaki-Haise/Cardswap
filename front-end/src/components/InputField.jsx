import React from "react";

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
  placeholder = "",
}) {
  return (
    <div className="mb-3">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder || label}
      />
    </div>
  );
}

export default InputField;
