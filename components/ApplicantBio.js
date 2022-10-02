import React from "react";
import InputField from "./InputField";

import styles from "../styles/ApplicantBio.module.css";
import SelectInput from "./SelectInput";

const ApplicantBio = () => {
  const departments = [
    "Chemistry",
    "Computer Science",
    "Earth Science",
    "Mathematics",
    "Physics",
    "Statistics & Act. Science",
  ];
  return (
    <div className={`${styles["applicant-bio"]}`}>
      <span className={styles.title}>Bio of Applicant</span>
      <div className={styles.fields}>
        <InputField label="First Name" type="text" placeholder="Michael" />
        <InputField label="Last Name" type="text" placeholder="Amponsah" />
        <InputField label="Other Names" type="text" placeholder="Kwame" />
        <SelectInput
          label="Department"
          placeholder="Please select an option"
          options={departments}
        />
      </div>
    </div>
  );
};

export default ApplicantBio;
