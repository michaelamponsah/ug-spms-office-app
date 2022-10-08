import React from "react";
import styles from "../styles/SelectInput.module.css";

const SelectInput = ({
  label,
  dataLabel,
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
    const fieldLabel = event.target.getAttribute("data-fieldlabel");
    onInputChange(selectedValue, fieldName, fieldLabel);
  };

  return (
    <div className={`${styles["input-field"]}`}>
      <label>{label}</label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        data-fieldlabel={dataLabel}
      >
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
