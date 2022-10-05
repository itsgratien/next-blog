import React from "react";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ width: "100%" }}>{children}</main>
    </>
  );
};

export default Layout;
