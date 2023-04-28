import "../assets/Styled-Login.css";
import { useState, useContext } from "react";
import { IsLoggedContext } from "../Context/isLoggedContext";

const Login = () => {
  const { logged, changeLoggedTrue } = useContext(IsLoggedContext);

  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    const localName = localStorage.getItem("username");
    const localPassword = localStorage.getItem("password");
    if ((loginName === localName) & (loginPassword === localPassword)) {
      setIsLogged(true);
      changeLoggedTrue();
    } else {
      setErrorMessage("Error: Calling Stormtroopers");
    }
  };

  return (
    <>
      {isLogged === true ? (
        <form>
          <div className="login">
            <div className="login-screen">
              <div className="login-form">
                <h1 className="wellcome-back">Wellcome back, {loginName}</h1>
                <img
                  className="logged-gif"
                  src="../src/assets/Images/ben-solo-proposal.gif"
                ></img>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <form>
          <div className="login">
            <div className="login-screen">
              <div className="login-form">
                <div className="control-group">
                  <input
                    type="text"
                    className="login-field"
                    placeholder="username"
                    id="login-name"
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                  ></input>
                  <label className="login-field-icon fui-user"></label>
                </div>
                <div className="control-group">
                  <input
                    type="current-password"
                    className="login-field"
                    placeholder="password"
                    id="login-pass"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  ></input>
                  <label className="login-field-icon fui-lock"></label>
                </div>
                <a className="btn" href="#" onClick={handleLogin}>
                  <p className="LoginP">LOG IN</p>
                </a>
                {errorMessage ? (
                  <p className="ErrorMessage">{errorMessage}</p>
                ) : null}
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Login;
