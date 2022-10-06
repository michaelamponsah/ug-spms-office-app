import React from "react";
import styles from "../styles/AppButton.module.css";

const AppButton = ({ title, type = "button", onClick, isDisabled }) => {
  return (
    <button className={`${styles["app-button"]}`} type={type} onClick={onClick} disabled={isDisabled}>
      {title}
    </button>
  );
};

export default AppButton;
