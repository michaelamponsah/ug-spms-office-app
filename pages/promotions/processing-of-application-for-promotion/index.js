import React from "react";
import ApplicantBio from "../../../components/ApplicantBio";
import ExternalAssessment from "../../../components/ExternalAssessment";
import Head from "../../../components/Head";
import InnerPageWrapper from "../../../components/InnerPageWrapper";
import PromotionForm from "../../../components/PromotionForm";
import PublicationsAndReminders from "../../../components/PublicationsAndReminders";

const ProfessorialPromotionsPage = () => {
  return (
    <InnerPageWrapper>
      <Head title="SPMS | UG - Promotion Application Tracking Form" />
      <div>
        <h1>Promotion Application Tracking Form</h1>
        <div>
          <PromotionForm>
            <PublicationsAndReminders />
          </PromotionForm>
        </div>
      </div>
    </InnerPageWrapper>
  );
};

export default ProfessorialPromotionsPage;
