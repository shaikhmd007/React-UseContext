import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../Context";
// import styles from "Navbar.css";

const NavStyle = {
  border: "2px solid gray",
  padding: "1rem",
  color: "Green",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const Navbar = () => {
  const { isLight, changeTheme } = useContext(ThemeContext);
  return (
    <div className="Navbar" style={NavStyle}>
      <div className="logo">Geekster</div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <br />
      <br />
      <Link to="/service">Services</Link>
      <br />
      <button
        onClick={() => {
          changeTheme();
        }}
      >
        Toggle Theme to {isLight ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Navbar;
