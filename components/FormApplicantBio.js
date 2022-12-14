import React from "react";
import InputField from "./InputField";

import styles from "../styles/ApplicantBio.module.css";
import SelectInput from "./SelectInput";
import TextArea from "./TextArea";
import FormSubHeading from "./FormSubHeading";
import AppButton from "./AppButton";
import PromotionForm from "./PromotionForm";

const FormApplicantBio = ({ nextStep, goBack, step, onFormChange, values }) => {
  // Departments
  const departments = [
    "Chemistry",
    "Computer Science",
    "Earth Science",
    "Mathematics",
    "Physics",
    "Statistics & Act. Science",
  ];

  // Positions
  const positions = ["Senior Lecturer", "Asscociate Professor", "Professor"];

  /*
  Grab the required input values from the values object prop received
  */
  const {
    applicantFirstName,
    applicantLastName,
    applicantOthernames,
    department,
    presentStatus,
    positionSought,
    applicationDate,
    smcDate,
    smcRecommendation,
  } = values;

  const handleContinue = (event) => {
    event.preventDefault();
    nextStep();
  };
  const handleGoBack = (event) => {
    event.preventDefault();
    goBack();
  };
  return (
    <div className={`${styles["applicant-bio"]}`}>
      <FormSubHeading>
        Basic Information of Applicant and Preliminary Assessments
      </FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="First Name"
          type="text"
          placeholder="Michael"
          name="applicantFirstName"
          onInputChange={onFormChange}
          value={applicantFirstName}
        />
        <InputField
          label="Last Name"
          type="text"
          placeholder="Amponsah"
          name="applicantLastName"
          onInputChange={onFormChange}
          value={applicantLastName}
        />
        <InputField
          label="Other Names"
          type="text"
          placeholder="Kwame"
          name="applicantOthernames"
          onInputChange={onFormChange}
          value={applicantOthernames}
        />
        <SelectInput
          label="Department"
          placeholder="Please select an option. Eg. Computer Science"
          options={departments}
          name="department"
          onInputChange={onFormChange}
          value={department}
        />
        <SelectInput
          label="Present Status"
          placeholder="Please select an option. Eg. Snr. Lecturer"
          options={positions}
          name="presentStatus"
          onInputChange={onFormChange}
          value={presentStatus}
        />
        <SelectInput
          label="Position Sought"
          placeholder="Please select an option. Eg. Snr. Lecturer"
          options={positions}
          name="positionSought"
          onInputChange={onFormChange}
          value={positionSought}
        />
        <InputField
          label="Date application was received"
          type="date"
          name="applicationDate"
          value={applicationDate}
          onInputChange={onFormChange}
        />
        <InputField
          label="Date application was put before S.M.C"
          type="date"
          name="smcDate"
          onInputChange={onFormChange}
          value={smcDate}
        />
        <TextArea
          label="S.M.C's Recommendation"
          placeholder="Please type here..."
          name="smcRecommendation"
          onInputChange={onFormChange}
          value={smcRecommendation}
        />
      </div>
      <div className="form-button-wrapper">
        <AppButton
          title="Go back"
          onClick={handleGoBack}
          isDisabled={step == 1 ? true : false}
        />
        <AppButton title="Save and Continue" onClick={handleContinue} />
      </div>
    </div>
  );
};

export default FormApplicantBio;
