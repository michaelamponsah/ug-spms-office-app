import React from "react";

import layoutStyles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <main className={layoutStyles.main}>{children}</main>
    </div>
  );
};

export default Layout;
