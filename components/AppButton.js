import React from "react";
import styles from "../styles/AppButton.module.css";

const AppButton = ({ title, type, onClick }) => {
  return (
    <button className={`${styles["app-button"]}`} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default AppButton;
