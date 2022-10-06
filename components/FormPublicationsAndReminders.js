import React from "react";
import styles from "../styles/PublicationsAndReminders.module.css";

import AppButton from "./AppButton";
import PromotionForm from "./PromotionForm";
import FormHeading from "./FormHeading";
import FormSubHeading from "./FormSubHeading";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
import TextArea from "./TextArea";

const FormPublicationsAndReminders = ({ goBack }) => {
  const handleGoback = (event) => {
    event.preventDefault();
    goBack();
  };

  return (
    <div className={`${styles["publications-reminders"]}`}>
      <FormSubHeading>
        Date on which publications were sent to external assessors{" "}
      </FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          type="date"
          name="pubSentDateAssessor1"
        />
        <InputField
          label="Assessor 2"
          type="date"
          name="pubSentDateAssessor2"
        />
        <InputField
          label="Assessor 3"
          type="date"
          name="pubSentDateAssessor3"
          isRequired={false}
        />
      </div>
      <FormSubHeading>
        Date on which reminders were sent to assessors
      </FormSubHeading>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="date" />
        <InputField label="Assessor 2" type="date" />
        <InputField label="Assessor 3" type="date" isRequired={false} />
      </div>
      <FormSubHeading> Date on which assessments were received</FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          type="date"
          name="assessmentRecvDateAssessor1"
        />
        <InputField
          label="Assessor 2"
          type="date"
          name="assessmentRecvDateAssessor2"
        />
        <InputField
          label="Assessor 3"
          type="date"
          name="assessmentRecvDateAssessor3"
          isRequired={false}
        />
      </div>
      <FormSubHeading>
        Nature of response received from assessors
      </FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          type="text"
          name="natureOfResAssessor1"
        />
        <InputField
          label="Assessor 2"
          type="text"
          name="natureOfResAssessor2"
        />
        <InputField
          label="Assessor 3"
          type="text"
          name="natureOfResAssessor3"
          isRequired={false}
        />
      </div>
      <FormSubHeading>
        Format of response received from assessors
      </FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          type="text"
          name="formatOfResAssessor1"
        />
        <InputField
          label="Assessor 2"
          type="text"
          name="formatOfResAssessor2"
        />
        <InputField
          label="Assessor 3"
          type="text"
          name="formatOfResAssessor3"
          isRequired={false}
        />
      </div>
      <FormSubHeading>
        Date on which acknowledgement letters were sent to assessors
      </FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          type="date"
          name="acknowledgementDateAssessor1"
        />
        <InputField
          label="Assessor 2"
          type="date"
          name="acknowledgementDateAssessor2"
        />
        <InputField
          label="Assessor 3"
          type="date"
          name="acknowledgementDateAssessor3"
          isRequired={false}
        />
      </div>
      <div className={styles.fields}>
        <TextArea
          label="Further actions taken"
          placeholder="Please type here..."
          name="furtherActions"
          isRequired={false}
        />
      </div>
      <div className="form-button-wrapper">
        <AppButton title="Go back" onClick={handleGoback} />
        <AppButton title="Submit" type="submit" />
      </div>
    </div>
  );
};

export default FormPublicationsAndReminders;
