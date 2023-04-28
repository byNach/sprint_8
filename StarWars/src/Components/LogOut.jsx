import "../assets/Styled-Login.css";
import { useContext } from "react";
import { IsLoggedContext } from "../Context/isLoggedContext";


const LogOut = () => {
  const { logged, changeLoggedFalse } = useContext(IsLoggedContext);
  const reset = "";

  const handleLogOut = () => {
    changeLoggedFalse()
    localStorage.setItem("logged", logged);
    localStorage.setItem("username", reset);
    localStorage.setItem("password", reset);
  };

  return (
    <>
      {logged === false ? (
        <>
          <form>
            <div className="login">
              <div className="login-screen">
                <div className="login-form">
                  <h1 className="wellcome-back">See you soon!</h1>
                  <img
                    className="logged-gif"
                    src="../src/assets/Images/starwars.gif"
                  ></img>
                </div>
              </div>
            </div>
          </form>
        </>
      ) : (
        <form>
          <div className="login">
            <div className="login-screen">
              <div className="login-form">
                <div className="control-group">
                  <label className="login-field-icon fui-user"></label>
                </div>
                <div className="control-group">
                  <label className="login-field-icon fui-lock"></label>
                </div>
                <a className="btn" href="#" onClick={handleLogOut()}>
                  <p className="LoginP">LOG OUT</p>
                </a>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default LogOut;
