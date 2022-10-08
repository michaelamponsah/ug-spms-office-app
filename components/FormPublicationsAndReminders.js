import React from "react";
import styles from "../styles/PublicationsAndReminders.module.css";

import AppButton from "./AppButton";
import PromotionForm from "./PromotionForm";
import FormHeading from "./FormHeading";
import FormSubHeading from "./FormSubHeading";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
import TextArea from "./TextArea";

const FormPublicationsAndReminders = ({ goBack, onFormChange, values }) => {
  const { furtherActions, dateDossierSentToCollege } = values;
  const { assessor1, assessor2, assessor3 } = values.externalAssessors;

  const handleGoback = (event) => {
    event.preventDefault();
    goBack();
  };

  return (
    <div className={`${styles["publications-reminders"]}`}>
      <FormSubHeading>
        Date on which publications were sent to external assessors
      </FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          type="date"
          onInputChange={onFormChange}
          name="datePublicationSentExtAss1"
          dataLabel="assessor1"
          value={assessor1.datePublicationSentExtAss1}
        />
        <InputField
          label="Assessor 2"
          type="date"
          onInputChange={onFormChange}
          name="datePublicationSentExtAss2"
          dataLabel="assessor2"
          value={assessor2.datePublicationSentExtAss2}
        />
        <InputField
          label="Assessor 3"
          type="date"
          onInputChange={onFormChange}
          name="datePublicationSentExtAss3"
          dataLabel="assessor3"
          isRequired={false}
          value={assessor3.datePublicationSentExtAss3}
        />
      </div>
      <FormSubHeading>
        Date on which reminders were sent to assessors
      </FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          type="date"
          onInputChange={onFormChange}
          name="dateReminderSentExtAss1"
          dataLabel="assessor1"
          value={assessor1.dateReminderSentExtAss1}
        />
        <InputField
          label="Assessor 2"
          type="date"
          onInputChange={onFormChange}
          name="dateReminderSentExtAss2"
          dataLabel="assessor2"
          value={assessor2.dateReminderSentExtAss2}
        />
        <InputField
          label="Assessor 3"
          type="date"
          onInputChange={onFormChange}
          name="dateReminderSentExtAss3"
          dataLabel="assessor3"
          isRequired={false}
          value={assessor3.dateReminderSentExtAss3}
        />
      </div>
      <FormSubHeading> Date on which assessments were received</FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          type="date"
          onInputChange={onFormChange}
          name="dateAssessmentRecvExtAss1"
          dataLabel="assessor1"
          value={assessor1.dateAssessmentRecvExtAss1}
        />
        <InputField
          label="Assessor 2"
          type="date"
          onInputChange={onFormChange}
          name="dateAssessmentRecvExtAss2"
          dataLabel="assessor2"
          value={assessor2.dateAssessmentRecvExtAss2}
        />
        <InputField
          label="Assessor 3"
          type="date"
          onInputChange={onFormChange}
          name="dateAssessmentRecvExtAss3"
          dataLabel="assessor3"
          isRequired={false}
          value={assessor3.dateAssessmentRecvExtAss3}
        />
      </div>
      <FormSubHeading>
        Nature of response received from assessors
      </FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          type="text"
          onInputChange={onFormChange}
          name="natureOfResExtAss1"
          dataLabel="assessor1"
          value={assessor1.natureOfResExtAss1}
        />
        <InputField
          label="Assessor 2"
          type="text"
          onInputChange={onFormChange}
          name="natureOfResExtAss2"
          dataLabel="assessor2"
          value={assessor2.natureOfResExtAss2}
        />
        <InputField
          label="Assessor 3"
          type="text"
          onInputChange={onFormChange}
          name="natureOfResExtAss3"
          dataLabel="assessor3"
          isRequired={false}
          value={assessor3.natureOfResExtAss3}
        />
      </div>
      <FormSubHeading>
        Format of response received from assessors
      </FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          type="text"
          onInputChange={onFormChange}
          name="formatOfresExtAss1"
          dataLabel="assessor1"
          value={assessor1.formatOfresExtAss1}
        />
        <InputField
          label="Assessor 2"
          type="text"
          onInputChange={onFormChange}
          name="formatOfresExtAss2"
          dataLabel="assessor2"
          value={assessor2.formatOfresExtAss2}
        />
        <InputField
          label="Assessor 3"
          type="text"
          onInputChange={onFormChange}
          name="formatOfresExtAss3"
          dataLabel="assessor3"
          isRequired={false}
          value={assessor3.formatOfresExtAss3}
        />
      </div>
      <FormSubHeading>
        Date on which acknowledgement letters were sent to assessors
      </FormSubHeading>
      <div className={styles.fields}>
        <InputField
          label="Assessor 1"
          type="date"
          onInputChange={onFormChange}
          name="acknLetterDateExtAss1"
          dataLabel="assessor1"
          value={assessor1.acknLetterDateExtAss1}
        />
        <InputField
          label="Assessor 2"
          type="date"
          onInputChange={onFormChange}
          name="acknLetterDateExtAss2"
          dataLabel="assessor2"
          value={assessor2.acknLetterDateExtAss2}
        />
        <InputField
          label="Assessor 3"
          type="date"
          onInputChange={onFormChange}
          name="acknLetterDateExtAss3"
          dataLabel="assessor3"
          isRequired={false}
          value={assessor3.acknLetterDateExtAss3}
        />
      </div>
      <div className={styles.fields}>
        <InputField
          label="Date on which dossier was sent to college"
          type="date"
          onInputChange={onFormChange}
          name="dateDossierSentToCollege"
          value={dateDossierSentToCollege}
        />
      </div>
      <div className={styles.fields}>
        <TextArea
          label="Further actions taken"
          placeholder="Please type here..."
          name="furtherActions"
          isRequired={false}
          onInputChange={onFormChange}
          value={furtherActions}
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
