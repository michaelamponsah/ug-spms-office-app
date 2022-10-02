import React from "react";
import styles from "../styles/TextArea.module.css";

const TextArea = ({ label, placeholder, isRequired = true }) => {
  return (
    <div className={`${styles["input-field"]}`}>
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        required={isRequired}
        spellCheck={true}
      ></textarea>
    </div>
  );
};

export default TextArea;
