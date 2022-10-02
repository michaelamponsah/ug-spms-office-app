import React from "react";

const PromotionForm = ({ children }) => {
  const handleSubmit = () => {};
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>{children}</form>
    </React.Fragment>
  );
};

export default PromotionForm;
