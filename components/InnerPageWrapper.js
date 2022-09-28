import React, { Children } from "react";
import SideNavigation from "./SideNavigation";
import styles from "../styles/InnerPageWrapper.module.css";

const InnerPageWrapper = ({ children }) => {
  return (
    <div className={`${styles["inner-page-wrapper"]}`}>
      <div>
        <SideNavigation />
      </div>
      <div className={`${styles["main-page"]}`}>{children}</div>
    </div>
  );
};

export default InnerPageWrapper;
