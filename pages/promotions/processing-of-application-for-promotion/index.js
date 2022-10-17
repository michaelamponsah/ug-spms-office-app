import React, { useState } from "react";
import AppLinkButton from "../../../components/AppLinkButton";
import Head from "../../../components/Head";
import InnerPageWrapper from "../../../components/InnerPageWrapper";
import MultiStepFormWrapper from "../../../components/MultiStepFormWrapper";
import PromotionForm from "../../../components/PromotionForm";
import style from "../../../styles/ProcessingApplication.module.css";

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

    externalAssessors: {
      assessor1: {
        fullNameOfExtAssessor1: "",
        addressOfExtAssessor1: "",
        dateWrittenToExtAssessor1: "",
        dateResRecvExtAss1: "",
        datePublicationSentExtAss1: "",
        dateReminderSentExtAss1: "",
        dateAssessmentRecvExtAss1: "",
        natureOfResExtAss1: "",
        formatOfresExtAss1: "",
        acknLetterDateExtAss1: "",
      },
      assessor2: {
        fullNameOfExtAssessor2: "",
        addressOfExtAssessor2: "",
        dateWrittenToExtAssessor2: "",
        dateResRecvExtAss2: "",
        datePublicationSentExtAss2: "",
        dateReminderSentExtAss2: "",
        dateAssessmentRecvExtAss2: "",
        natureOfResExtAss2: "",
        formatOfresExtAss2: "",
        acknLetterDateExtAss2: "",
      },
      assessor3: {
        fullNameOfExtAssessor3: "",
        addressOfExtAssessor3: "",
        dateWrittenToExtAssessor3: "",
        dateResRecvExtAss3: "",
        datePublicationSentExtAss3: "",
        dateReminderSentExtAss3: "",
        dateAssessmentRecvExtAss3: "",
        natureOfResExtAss3: "",
        formatOfresExtAss2: "",
        acknLetterDateExtAss2: "",
      },
    },

    furtherActions: "",
    dateDossierSentToCollege: "",
  };

  const [promotionFormValues, setPromotionFormValues] = useState(
    initialPromotionFormValues
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      success: true,
      message: "Form submitted successfully",
      data: promotionFormValues,
    });
  };

  const handleChange = (enteredInput, fieldName, fieldLabel) => {
    /**
     * We update the state based on the field label.
     * This implementation was influenced by the use of nested state
     */
    switch (fieldLabel) {
      case "assessor1":
        setPromotionFormValues({
          ...promotionFormValues,
          externalAssessors: {
            ...promotionFormValues.externalAssessors,
            assessor1: {
              ...promotionFormValues.externalAssessors.assessor1,
              [fieldName]: enteredInput,
            },
          },
        });
        break;
      case "assessor2":
        setPromotionFormValues({
          ...promotionFormValues,
          externalAssessors: {
            ...promotionFormValues.externalAssessors,
            assessor2: {
              ...promotionFormValues.externalAssessors.assessor2,
              [fieldName]: enteredInput,
            },
          },
        });
        break;
      case "assessor3":
        setPromotionFormValues({
          ...promotionFormValues,
          externalAssessors: {
            ...promotionFormValues.externalAssessors,
            assessor3: {
              ...promotionFormValues.externalAssessors.assessor3,
              [fieldName]: enteredInput,
            },
          },
        });
        break;
      default:
        setPromotionFormValues({
          ...promotionFormValues,
          [fieldName]: enteredInput,
        });
    }
  };

  return (
    <InnerPageWrapper>
      <Head title="SPMS | UG - Promotion Application Tracking Form" />
      <div>
        <h1 className="heading-main align-center">
          Promotion Application Tracking Form
        </h1>
        <hr />
        <div className={`${style["link-button-wrapper"]}`}>
          <AppLinkButton>View Applications</AppLinkButton>
        </div>
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
