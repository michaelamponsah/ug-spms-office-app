import React from "react";
import styles from "../styles/TextArea.module.css";

const TextArea = ({ label, placeholder }) => {
  return (
    <div className={`${styles["input-field"]}`}>
      <label>{label}</label>
      <textarea>{placeholder}</textarea>
    </div>
  );
};

export default TextArea;
