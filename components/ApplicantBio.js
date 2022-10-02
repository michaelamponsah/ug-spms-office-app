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
  const positions = ["Senior Lecturer", "Asscociate Professor", "Professor"];
  return (
    <div className={`${styles["applicant-bio"]}`}>
      <span className={styles.title}>Basic Information of Applicant</span>
      <div className={styles.fields}>
        <InputField label="First Name" type="text" placeholder="Michael" />
        <InputField label="Last Name" type="text" placeholder="Amponsah" />
        <InputField label="Other Names" type="text" placeholder="Kwame" />
        <SelectInput
          label="Department"
          placeholder="Please select an option. Eg. Computer Science"
          options={departments}
        />
        <SelectInput
          label="Present Status"
          placeholder="Please select an option. Eg. Snr. Lecturer"
          options={positions}
        />
        <SelectInput
          label="Position Sought"
          placeholder="Please select an option. Eg. Snr. Lecturer"
          options={positions}
        />
      </div>
    </div>
  );
};

export default ApplicantBio;
