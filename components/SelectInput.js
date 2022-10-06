import React from "react";
import styles from "../styles/SelectInput.module.css";

const SelectInput = ({
  label,
  placeholder,
  isRequired = true,
  options = [],
  name,
  value,
  onInputChange,
}) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const fieldName = event.target.name;
    onInputChange(selectedValue, fieldName);
  };

  return (
    <div className={`${styles["input-field"]}`}>
      <label>{label}</label>
      <select name={name} value={value} onChange={handleChange}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
