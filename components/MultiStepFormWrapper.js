import React, { useState } from "react";

import ApplicantBio from "./ApplicantBio";
import ExternalAssessment from "./ExternalAssessment";
import PromotionForm from "./PromotionForm";
import PublicationsAndReminders from "./PublicationsAndReminders";

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
          <ApplicantBio continue={nextStep} />
        </PromotionForm>
      );
    case 2:
      return (
        <PromotionForm>
          <ExternalAssessment continue={nextStep} goBack={prevStep} />
        </PromotionForm>
      );
    case 3:
      return [
        <PromotionForm>
          <PublicationsAndReminders goBack={prevStep} />
        </PromotionForm>,
      ];
  }
};

export default MultiStepFormWrapper;
