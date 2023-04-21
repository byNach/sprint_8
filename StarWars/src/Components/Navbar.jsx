import React from "react";
import { Link } from "react-router-dom";
import "../assets/Styled-Navbar.css";

const Navbar = () => {

  return (
    <>
      <div className="Navbar">
        <Link to="/HomePage">
          <h3 className="h3Navbar">
            HOME
          </h3>
        </Link>

        <Link to="/StarshipPage">
          <h3 className="h3Navbar">
            STARSHIPS
          </h3>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
