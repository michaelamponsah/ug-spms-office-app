import React from "react";
import InputField from "./InputField";

import styles from "../styles/ApplicantBio.module.css";

const ApplicantBio = () => {
  return (
    <div className={`${styles["applicant-bio"]}`}>
      <span>Bio of Applicant</span>
      <div className={styles.fields}>
        <InputField label="First Name" type="text" placeholder="Michael" />
        <InputField label="Last Name" type="text" placeholder="Amponsah" />
        <InputField label="Other Names" type="text" placeholder="Kwame" />
      </div>
    </div>
  );
};

export default ApplicantBio;
