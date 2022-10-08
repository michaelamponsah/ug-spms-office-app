import React from "react";
import styles from "../styles/ExternalAssessment.module.css";
import AppButton from "./AppButton";
import FormHeading from "./FormHeading";
import FormSubHeading from "./FormSubHeading";
import InputField from "./InputField";
import PromotionForm from "./PromotionForm";

const FormExternalAssessment = ({ nextStep, goBack, onFormChange, values }) => {
  const { assessor1, assessor2, assessor3 } = values.externalAssessors;
  const { dateToDepartment, responseDateFromDept } = values;

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
          name="dateToDepartment"
          onInputChange={onFormChange}
          value={dateToDepartment}
        />
        <InputField
          label="Date on which response was received from departmental head"
          type="date"
          name="responseDateFromDept"
          onInputChange={onFormChange}
          value={responseDateFromDept}
        />
        <InputField
          label="Name of external assessor 1"
          dataLabel="assessor1"
          type="text"
          placeholder="Eg. Prof. Jane Doe"
          name="fullNameOfExtAssessor1"
          onInputChange={onFormChange}
          value={assessor1.fullNameOfExtAssessor1}
        />
        <InputField
          label="Address of external assessor 1"
          dataLabel="assessor1"
          type="text"
          placeholder="Eg. 123 J.K Rowling Road - Durban, South Africa"
          name="addressOfExtAssessor1"
          onInputChange={onFormChange}
          value={assessor1.addressOfExtAssessor1}
        />
        <InputField
          label="Name of external assessor 2"
          dataLabel="assessor2"
          type="text"
          placeholder="Eg. Dr. John Doe"
          name="fullNameOfExtAssessor2"
          onInputChange={onFormChange}
          value={assessor2.fullNameOfExtAssessor2}
        />
        <InputField
          label="Address of external assessor 2"
          dataLabel="assessor2"
          type="text"
          placeholder="Eg. 123 J.K Rowling Road - Durban, South Africa"
          name="addressOfExtAssessor2"
          onInputChange={onFormChange}
          value={assessor2.addressOfExtAssessor2}
        />
        <InputField
          label="Name of external assessor 3"
          dataLabel="assessor3"
          type="text"
          placeholder="Eg. Dr. John Doe"
          name="fullNameOfExtAssessor3"
          onInputChange={onFormChange}
          value={assessor3.fullNameOfExtAssessor3}
          isRequired={false}
        />
        <InputField
          label="Address of external assessor 3"
          dataLabel="assessor3"
          type="text"
          placeholder="Eg. 123 J.K Rowling Road - Durban, South Africa"
          isRequired={false}
          name="addressOfExtAssessor3"
          onInputChange={onFormChange}
          value={assessor3.addressOfExtAssessor3}
        />
      </div>
      <FormSubHeading> Date on which assessors were written to</FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          dataLabel="assessor1"
          type="date"
          name="dateWrittenToExtAssessor1"
          onInputChange={onFormChange}
          value={assessor1.dateWrittenToExtAssessor1}
        />
        <InputField
          label="Assessor 2"
          dataLabel="assessor2"
          type="date"
          name="dateWrittenToExtAssessor2"
          onInputChange={onFormChange}
          value={assessor2.dateWrittenToExtAssessor2}
        />
        <InputField
          label="Assessor 3"
          dataLabel="assessor3"
          type="date"
          name="dateWrittenToExtAssessor3"
          onInputChange={onFormChange}
          value={assessor3.dateWrittenToExtAssessor3}
          isRequired={false}
        />
      </div>
      <FormSubHeading> Date on which replies were received</FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          dataLabel="assessor1"
          type="date"
          name="dateResRecvExtAss1"
          onInputChange={onFormChange}
          value={assessor1.dateResRecvExtAss1}
        />
        <InputField
          label="Assessor 2"
          dataLabel="assessor2"
          type="date"
          name="dateResRecvExtAss2"
          onInputChange={onFormChange}
          value={assessor2.dateResRecvExtAss2}
        />
        <InputField
          label="Assessor 3"
          dataLabel="assessor3"
          type="date"
          name="dateResRecvExtAss3"
          onInputChange={onFormChange}
          value={assessor3.dateResRecvExtAss3}
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
