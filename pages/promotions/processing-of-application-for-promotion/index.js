import React, { useState } from "react";
import Head from "../../../components/Head";
import InnerPageWrapper from "../../../components/InnerPageWrapper";
import MultiStepFormWrapper from "../../../components/MultiStepFormWrapper";
import PromotionForm from "../../../components/PromotionForm";

const ProfessorialPromotionsPage = () => {
  // using state to keep track of all data collected from the form
  const initialPromotionFormValues = {
    applicantFirstName: "",
    applicantLastName: "",
    applicantOthernames: "",
    department: "",
    presentStatus: "",
    positionSought: "",
    applicationDate: "",

    smcDate: "",
    smcRecommendation: "",
    dateToDepartment: "",
    responseDateFromDept: "",

    fullName: "",
    address: "",
    dateWrittenTo: "",
    dateResRecv: "",
    datePublicationSent: "",
    dateReminderSent: "",
    dateAssessmentRecv: "",
    natureOfRes: "",
    formatOfres: "",
    acknLetterDate: "",

    furtherActions: "",
    dateDossierSentToCollege: "",
  };

  const [promotionFormValues, setPromotionFormValues] = useState(
    initialPromotionFormValues
  );


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const handleChange = (enteredInput, fieldName) => {
    setPromotionFormValues({
      ...promotionFormValues,
      [fieldName]: enteredInput,
    });
  };

  return (
    <InnerPageWrapper>
      <Head title="SPMS | UG - Promotion Application Tracking Form" />
      <div>
        <h1>Promotion Application Tracking Form</h1>
        <PromotionForm onSubmitForm={handleSubmit}>
          <MultiStepFormWrapper
            formValues={promotionFormValues}
            onFormInputChange={handleChange}
          />
        </PromotionForm>
      </div>
    </InnerPageWrapper>
  );
};

export default ProfessorialPromotionsPage;
