import React from "react";
import "../assets/Styled-Header.css";

const Header = () => {
  return (
    <>
      <div className="Header">
          <img
            className="StarWarsLogoHeader"
            src="../src/assets/Images/star-wars-logo-wallpaper-preview.jpg"
          ></img>
        <div className="LoginBox">
          <p className="Login">LOG IN</p>
          <p className="Login">SING UP</p>
        </div>
      </div>
    </>
  );
};

export default Header;
