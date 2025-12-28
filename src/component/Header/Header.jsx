import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
          Home
        </Link>
        <Link
          to="/Mobiles"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Mobiles
        </Link>
        <Link
          to="/Laptops"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Laptops
        </Link>
      </nav>
    </div>
  );
};

export default Header;
