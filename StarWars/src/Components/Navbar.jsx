import React from "react";
import { Link } from "react-router-dom";
import "../assets/Styled-Navbar.css";
import { IsLoggedContext } from "../Context/isLoggedContext";
import { useContext } from "react";

const Navbar = () => {
  const { logged } = useContext(IsLoggedContext);

  return (
    <>
      <div className="Navbar">
        <Link to="/HomePage">
          <h3 className="h3Navbar">HOME</h3>
        </Link>
        {logged ? (
          <Link to="/StarshipPage">
            <h3 className="h3Navbar">STARSHIPS</h3>
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
