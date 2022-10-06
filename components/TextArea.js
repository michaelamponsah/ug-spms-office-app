import React from "react";
import styles from "../styles/TextArea.module.css";

const TextArea = ({
  label,
  placeholder,
  isRequired = true,
  onInputChange,
  name,
  value,
}) => {
  const handleChange = (event) => {
    const fieldName = event.target.name;
    const enteredValue = event.target.value;
    onInputChange(enteredValue, fieldName);
  };
  return (
    <div className={`${styles["input-field"]}`}>
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        required={isRequired}
        spellCheck={true}
        onChange={handleChange}
        name={name}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextArea;
