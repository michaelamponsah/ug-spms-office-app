import React, { Children } from "react";
import SideNavigation from "./SideNavigation";

const InnerPageWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <SideNavigation />
      <div>{children}</div>
    </React.Fragment>
  );
};

export default InnerPageWrapper;
