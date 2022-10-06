import React from "react";
import styles from "../styles/InputField.module.css";

const InputField = ({
  label,
  type,
  placeholder,
  isRequired = true,
  name,
  value,
  onInputChange,
}) => {
  const handleChange = (event) => {
    const enteredInput = event.target.value;
    const fieldName = event.target.name;
    onInputChange(enteredInput, fieldName);
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
      />
    </div>
  );
};

export default InputField;
