import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/header.jsx";
import Footer from "../Footer/Footer.jsx";
import SideBar from "../SideBar/SideBar.jsx";

const Roots = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header></Header>
      <div style={{display: "flex", gap: "10px"}}>
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
