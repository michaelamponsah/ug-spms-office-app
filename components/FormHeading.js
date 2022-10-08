import React from "react";
import styles from "../styles/FormHeading.module.css";

const FormHeading = ({children}) => {
  return (
    <span className={styles.title}>
      {children}
    </span>
  );
};

export default FormHeading;
