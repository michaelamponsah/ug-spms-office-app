import React from "react";
import styles from "../styles/ExternalAssessment.module.css";
import AppButton from "./AppButton";
import FormHeading from "./FormHeading";
import FormSubHeading from "./FormSubHeading";
import InputField from "./InputField";

const ExternalAssessment = ({ nextStep, goBack }) => {
  const handleContinue = (event) => {
    event.preventDefault();
    nextStep();
  };
  const handleGoback = (event) => {
    event.preventDefault();
    goBack();
  };
  return (
    <div className={`${styles["external-assessment"]}`}>
      <FormSubHeading>Details on External Assessments</FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Date on which lett. was sent to HoD to submit names and addr. of ext. assessors"
          type="date"
        />
        <InputField
          label="Date on which response was received from departmental head"
          type="date"
        />
        <InputField
          label="Name of external assessor 1"
          type="text"
          placeholder="Eg. Prof. Jane Doe"
        />
        <InputField
          label="Address of external assessor 1"
          type="text"
          placeholder="Eg. 123 J.K Rowling Road - Durban, South Africa"
        />
        <InputField
          label="Name of external assessor 2"
          type="text"
          placeholder="Eg. Dr. John Doe"
        />
        <InputField
          label="Address of external assessor 2"
          type="text"
          placeholder="Eg. 123 J.K Rowling Road - Durban, South Africa"
        />
        <InputField
          label="Name of external assessor 3"
          type="text"
          placeholder="Eg. Dr. John Doe"
          isRequired={false}
        />
        <InputField
          label="Address of external assessor 3"
          type="text"
          placeholder="Eg. 123 J.K Rowling Road - Durban, South Africa"
          isRequired={false}
        />
      </div>
      <FormSubHeading> Date on which assessors were written to</FormSubHeading>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="date" />
        <InputField label="Assessor 2" type="date" />
        <InputField label="Assessor 3" type="date" isRequired={false} />
      </div>
      <FormSubHeading> Date on which replies were received</FormSubHeading>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="date" />
        <InputField label="Assessor 2" type="date" />
        <InputField label="Assessor 3" type="date" isRequired={false} />
      </div>
      <div className="form-button-wrapper">
        <AppButton title="Go back" onClick={handleGoback} />
        <AppButton title="Save and Continue" onClick={handleContinue} />
      </div>
    </div>
  );
};

export default ExternalAssessment;
