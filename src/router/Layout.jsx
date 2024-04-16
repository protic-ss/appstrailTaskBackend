import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
