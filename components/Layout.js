import React from "react";

import layoutStyles from "../styles/Layout.module.css";
import TopNavbar from "./TopNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <TopNavbar />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
