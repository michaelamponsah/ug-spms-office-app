import React from "react";
import styles from "../styles/PublicationsAndReminders.module.css";
import InputField from "./InputField";

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
      <span className={styles.title}>Date on which reminders were sent to assessors</span>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="date" />
        <InputField label="Assessor 2" type="date" />
        <InputField label="Assessor 3" type="date" isRequired={false} />
      </div>
      <span className={styles.title}>Date on which assessments were received</span>
      <div className={styles.fields}>
        <InputField label="Assessor 1" type="date" />
        <InputField label="Assessor 2" type="date" />
        <InputField label="Assessor 3" type="date" isRequired={false} />
      </div>
    </div>
  );
};

export default PublicationsAndReminders;
