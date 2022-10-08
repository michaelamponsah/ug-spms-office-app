import React from "react";
import styles from "../styles/InputField.module.css";

const InputField = ({
  label,
  type,
  dataLabel,
  placeholder,
  isRequired = true,
  name,
  value,
  onInputChange,
}) => {
  const handleChange = (event) => {
    const enteredInput = event.target.value;
    const fieldName = event.target.name;
    const fieldLabel = event.target.getAttribute("data-fieldlabel");
    onInputChange(enteredInput, fieldName, fieldLabel);
  };
  return (
    <div className={`${styles["input-field"]}`}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={isRequired}
        name={name}
        value={value}
        onChange={handleChange}
        data-fieldlabel={dataLabel}
      />
    </div>
  );
};

export default InputField;
