import "../assets/Styled-Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { IsLoggedContext } from "../Context/isLoggedContext";

const Header = () => {
  const { logged } = useContext(IsLoggedContext);

  return (
    <>
      <div className="Header">
        <iframe
          className="giphy-embed"
          src="https://giphy.com/embed/KFhwTLFngMTd3GDbd3"
          allowFullScreen
        ></iframe>
        <img
          className="StarWarsLogoHeader"
          src="../src/assets/Images/star-wars-logo-wallpaper-preview.jpg"
        ></img>
        <div className="LoginBox">
            {logged ? (<div><Link to="/LogOutPage"><p className="Login"> LOG OUT</p></Link></div>): (<div><Link to="/LoginPage"><p className="Login">LOG IN</p></Link></div>)}
            {logged ? null : (<Link to="/SingUpPage">
            <p className="Login"> SING UP</p>
          </Link>)}
          
        </div>
      </div>
    </>
  );
};

export default Header;
