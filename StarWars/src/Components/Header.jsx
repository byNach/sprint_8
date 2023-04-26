import "../assets/Styled-Header.css";
import { Link } from "react-router-dom";

const Header = () => {
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
            {localStorage.getItem("logged") === "true" ? (<div><Link to="/LogOutPage"><p className="Login"> LOG OUT</p></Link></div>): (<div><Link to="/LoginPage"><p className="Login">LOG IN</p></Link></div>)}
          <Link to="/SingUpPage">
            <p className="Login"> SING UP</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
