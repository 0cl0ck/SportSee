import React from "react";
import Header from "./Header/Header.jsx";
import Aside from "./Aside/Aside.jsx";
import Main from "../pages/Main.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Header />
    <Aside />
    <Main>
      <Outlet />
    </Main>
  </>
);

export default Layout;
