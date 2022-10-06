import React, { useState } from "react";

import FormApplicantBio from "./FormApplicantBio";
import FormExternalAssessment from "./FormExternalAssessment";
import FormPublicationsAndReminders from "./FormPublicationsAndReminders";

const MultiStepFormWrapper = ({ formValues, onFormInputChange }) => {
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
        <FormApplicantBio
          nextStep={nextStep}
          goBack={prevStep}
          step={step}
          values={formValues}
          onFormChange={onFormInputChange}
        />
      );

    case 2:
      return (
        <FormExternalAssessment
          nextStep={nextStep}
          goBack={prevStep}
          values={formValues}
          onFormChange={onFormInputChange}
        />
      );
    case 3:
      return (
        <FormPublicationsAndReminders
          goBack={prevStep}
          step={step}
          values={formValues}
          onFormChange={onFormInputChange}
        />
      );
  }
};

export default MultiStepFormWrapper;
