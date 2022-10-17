import React from "react";
import styles from "../styles/TopNavbar.module.css";

const TopNavbar = () => {
  return (
    <nav className={`${styles["nav-wrapper"]}`}>
      <div className={`${styles["ug-logo-wrapper"]}`}>
        <img src="/ug-crest.png" alt="University of Ghana crest" />
        <span>UG|SPMS</span>
      </div>
      <div className={`${styles["right-side"]}`}>
        <spa>Welcome, User</spa>
      </div>
    </nav>
  );
};

export default TopNavbar;
