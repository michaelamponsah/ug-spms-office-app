import React from "react";
import Head from "next/head";
import LayoutStyles from "../styles/Layout.module.css";

const Layout = ({ title }) => {
  return (
    <div className={LayoutStyles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={layoutStyles.main}>{children}</main>
    </div>
  );
};

export default Layout;
