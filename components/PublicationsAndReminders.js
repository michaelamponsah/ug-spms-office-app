import React from "react";
import styles from "../styles/PublicationsAndReminders.module.css";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
import TextArea from "./TextArea";

const PublicationsAndReminders = () => {
  return (
    <div className={`${styles["publications-reminders"]}`}>
      <span className={styles.title}>
        Date on which publications were sent to external assessors{" "}
      </span>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="date" />
        <InputField label="Assessor 2" type="date" />
        <InputField label="Assessor 3" type="date" isRequired={false} />
      </div>
      <span className={styles.title}>
        Date on which reminders were sent to assessors
      </span>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="date" />
        <InputField label="Assessor 2" type="date" />
        <InputField label="Assessor 3" type="date" isRequired={false} />
      </div>
      <span className={styles.title}>
        Date on which assessments were received
      </span>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="date" />
        <InputField label="Assessor 2" type="date" />
        <InputField label="Assessor 3" type="date" isRequired={false} />
      </div>
      <span className={styles.title}>
        Nature of response received from assessors
      </span>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="text" />
        <InputField label="Assessor 2" type="text" />
        <InputField label="Assessor 3" type="text" isRequired={false} />
      </div>
      <span className={styles.title}>
        Format of response received from assessors
      </span>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="text" />
        <InputField label="Assessor 2" type="text" />
        <InputField label="Assessor 3" type="text" isRequired={false} />
      </div>
      <span className={styles.title}>
        Date on which acknowledgement letters were sent to assessors
      </span>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="date" />
        <InputField label="Assessor 2" type="date" />
        <InputField label="Assessor 3" type="date" isRequired={false} />
      </div>
      <div className={styles.fields}>
        <TextArea
          label="Further actions taken"
          placeholder="Please type here..."
          isRequired={false}
        />
      </div>
    </div>
  );
};

export default PublicationsAndReminders;
