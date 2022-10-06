import React from "react";
import styles from "../styles/ExternalAssessment.module.css";
import AppButton from "./AppButton";
import FormHeading from "./FormHeading";
import FormSubHeading from "./FormSubHeading";
import InputField from "./InputField";
import PromotionForm from "./PromotionForm";

const FormExternalAssessment = ({ nextStep, goBack }) => {
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
            name="hodDate"
          />
          <InputField
            label="Date on which response was received from departmental head"
            type="date"
            name="responseFromHDepartmentDate"
          />
          <InputField
            label="Name of external assessor 1"
            type="text"
            placeholder="Eg. Prof. Jane Doe"
            name="nameOfExtAssessor1"
          />
          <InputField
            label="Address of external assessor 1"
            type="text"
            placeholder="Eg. 123 J.K Rowling Road - Durban, South Africa"
            name="addrOfExtAssessor1"
          />
          <InputField
            label="Name of external assessor 2"
            type="text"
            placeholder="Eg. Dr. John Doe"
            name="nameOfExtAssessor2"
          />
          <InputField
            label="Address of external assessor 2"
            type="text"
            placeholder="Eg. 123 J.K Rowling Road - Durban, South Africa"
            name="addrOfExtAssessor2"
          />
          <InputField
            label="Name of external assessor 3"
            type="text"
            placeholder="Eg. Dr. John Doe"
            name="nameOfExtAssessor3"
            isRequired={false}
          />
          <InputField
            label="Address of external assessor 3"
            type="text"
            placeholder="Eg. 123 J.K Rowling Road - Durban, South Africa"
            isRequired={false}
            name="addrOfExtAssessor3"
          />
        </div>
        <FormSubHeading>
          {" "}
          Date on which assessors were written to
        </FormSubHeading>
        <div className={styles.fields}>
          <InputField
            label="Assessor 1"
            type="date"
            name="writtenDateOfAssessor1"
          />
          <InputField
            label="Assessor 2"
            type="date"
            name="writtenDateOfAssessor2"
          />
          <InputField
            label="Assessor 3"
            type="date"
            name="writtenDateOfAssessor3"
            isRequired={false}
          />
        </div>
        <FormSubHeading> Date on which replies were received</FormSubHeading>
        <div className={styles.fields}>
          <InputField
            label="Assessor 1"
            type="date"
            name="responseDateOfAssessor1"
          />
          <InputField
            label="Assessor 2"
            type="date"
            name="responseDateOfAssessor2"
          />
          <InputField
            label="Assessor 3"
            type="date"
            name="responseDateOfAssessor3"
            isRequired={false}
          />
        </div>
        <div className="form-button-wrapper">
          <AppButton title="Go back" onClick={handleGoback} />
          <AppButton title="Save and Continue" onClick={handleContinue} />
        </div>
      </div>
  );
};

export default FormExternalAssessment;
