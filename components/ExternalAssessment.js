import React from "react";
import styles from "../styles/ExternalAssessment.module.css";
import InputField from "./InputField";

const ExternalAssessment = () => {
  return (
    <div className={`${styles["external-assessment"]}`}>
      <span className={styles.title}>Details on External Assessments</span>
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
      <span className={`${styles["sub-title"]}`}>
        Date on which assessors were written to
      </span>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="date" />

        <InputField label="Assessor 2" type="date" />
        <InputField label="Assessor 3" type="date" isRequired={false} />
      </div>
      <span className={`${styles["sub-title"]}`}>
        Date on which replies were received
      </span>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="date" />

        <InputField label="Assessor 2" type="date" />
        <InputField label="Assessor 3" type="date" isRequired={false} />
      </div>
    </div>
  );
};

export default ExternalAssessment;
