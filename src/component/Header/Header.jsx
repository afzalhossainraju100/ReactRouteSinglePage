import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>yes thsi is header</h1>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "10px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: "underline",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/Mobiles"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: "underline",
          })}
        >
          Mobiles
        </NavLink>
        <NavLink
          to="/Laptops"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: "underline",
          })}
        >
          Laptops
        </NavLink>
        <NavLink
          to="/Users"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: "underline",
          })}
        >
          Users
        </NavLink>
        <NavLink
          to="/Users"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: "underline",
          })}
        >
          Users
        </NavLink>
        <NavLink
          to="/Users2"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: "underline",
          })}
        >
          Users2
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
