import React, { useState } from "react";

import FormApplicantBio from "./FormApplicantBio";
import FormExternalAssessment from "./FormExternalAssessment";
import PromotionForm from "./PromotionForm";
import FormPublicationsAndReminders from "./FormPublicationsAndReminders";
import next from "next";

const MultiStepFormWrapper = () => {
  // using state to keep track of all data collected from the form
  const [promotionFormData, setPromotionFormData] = useState({
    firstName: "",
    lastName: "",
    otherNames: "",
    presentStatus: "",
    positionSought: "",
    dateApplicationWasReceived: "",
    dateApplicationPutBeforeSMC: "",
    externalAssessorsListDate: "",
    responseFromHodDate: "",
  });

  // State to keep track of the different steps in the application process
  const [step, setStep] = useState(1);

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <PromotionForm>
          <FormApplicantBio nextStep={nextStep} goBack={prevStep} step={step} />
        </PromotionForm>
      );
    case 2:
      return (
        <PromotionForm>
          <FormExternalAssessment nextStep={nextStep} goBack={prevStep} />
        </PromotionForm>
      );
    case 3:
      return [
        <PromotionForm>
          <FormPublicationsAndReminders
            goBack={prevStep}
            step={step}
          />
        </PromotionForm>,
      ];
  }
};

export default MultiStepFormWrapper;
