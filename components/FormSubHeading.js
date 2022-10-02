import React from "react";
import styles from "../styles/FormSubHeading.module.css";

const FormSubHeading = ({children}) => {
  return (
    <span className={`${styles["sub-title"]}`}>
      {children}
    </span>
  );
};

export default FormSubHeading;
