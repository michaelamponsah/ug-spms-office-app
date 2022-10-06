import React from "react";
import Head from "../../../components/Head";
import InnerPageWrapper from "../../../components/InnerPageWrapper";
import MultiStepFormWrapper from "../../../components/MultiStepFormWrapper";

const ProfessorialPromotionsPage = () => {
  return (
    <InnerPageWrapper>
      <Head title="SPMS | UG - Promotion Application Tracking Form" />
      <div>
        <h1>Promotion Application Tracking Form</h1>
        <div>
          <MultiStepFormWrapper />
        </div>
      </div>
    </InnerPageWrapper>
  );
};

export default ProfessorialPromotionsPage;
