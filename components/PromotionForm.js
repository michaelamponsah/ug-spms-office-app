import React, { useState } from "react";
import styles from "../styles/PromotionForm.module.css"

const PromotionForm = ({ children, onSubmitForm }) => {
  return (
    <React.Fragment>
      <form onSubmit={onSubmitForm} name="applicationForPromotionForm" className={`${styles["form-styles"]}`}>
        {children}
      </form>
    </React.Fragment>
  );
};

export default PromotionForm;
