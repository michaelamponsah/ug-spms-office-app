import React from "react";
import styles from "../styles/SelectInput.module.css";

const SelectInput = ({
  label,
  placeholder,
  isRequired = true,
  options = [],
}) => {
  return (
    <div className={`${styles["input-field"]}`}>
      <label>{label}</label>
      <select>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
