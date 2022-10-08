import React, { useState } from "react";

const PromotionForm = ({ children, onSubmitForm }) => {
  return (
    <React.Fragment>
      <form onSubmit={onSubmitForm} name="applicationForPromotionForm">
        {children}
      </form>
    </React.Fragment>
  );
};

export default PromotionForm;
