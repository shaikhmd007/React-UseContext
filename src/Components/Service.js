import React, { useContext } from "react";
import Navbar from "./Navbar";
import ThemeContext from "../Context";
import "../App.css";

const Service = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <>
      <div className={isLight ? "light" : "dark"}>
        <Navbar />
        <h1>Our Services ......</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          assumenda.
        </p>
      </div>
    </>
  );
};

export default Service;
