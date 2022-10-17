import React from "react";
import Link from "next/link";
import styles from "../styles/AppLinkButton.module.css";

const AppLinkButton = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Link href="/promotions/applicants">children</Link>
    </div>
  );
};

export default AppLinkButton;
