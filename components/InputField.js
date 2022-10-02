import React from "react";
import styles from "../styles/InputField.module.css";

const InputField = ({ label, type, placeholder, isRequired = true }) => {
  return (
    <div className={`${styles["input-field"]}`}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} required={isRequired} />
    </div>
  );
};

export default InputField;
