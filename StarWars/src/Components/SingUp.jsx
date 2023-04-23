import "../assets/Styled-SingUp.css";
import { useState } from "react";

const SingUp = () => {
  const [userName, setUserName] = useState("");
  const [newPassword, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [errorNameMessage, setErrorNameMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const [userNameValid, setUserNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const isUserNameValid = userName !== "";
    const doPasswordsMatch =
      (newPassword === repeatedPassword && newPassword) ||
      repeatedPassword !== "";
    !isUserNameValid
      ? setErrorNameMessage("Error: Username not valid!") &
        setUserNameValid(false)
      : setErrorNameMessage("") & setUserNameValid(true);
    !doPasswordsMatch
      ? setErrorPasswordMessage("Error: Passwords must match!") &
        setPasswordValid(false)
      : setErrorPasswordMessage("") & setPasswordValid(true);
  };

  const saveUserCredentials = () => {
    localStorage.setItem("username", userName);
    localStorage.setItem("password", newPassword);
  };
  const seeLocalStorageLog = () => {
    console.log(localStorage.getItem("username"));
    console.log(localStorage.getItem("password"));
  }
  
  return (
    <form>
      <div className="login">
        <div className="login-screen">
          {userNameValid & passwordValid ? (
            <>
              {saveUserCredentials()}
              {seeLocalStorageLog()}
              <div className="LoginSuccesBase">
                <p className="LoginSucces">Hello {userName},</p>
                <p className="LoginSucces">You joined the force!</p>
                <iframe
                  src="https://giphy.com/embed/AcfTF7tyikWyroP0x7"
                  width="480"
                  height="270"
                  className="giphy-embed"
                  allowFullScreen
                  ></iframe>
              </div>
            </>
          ) : (
            <div className="login-form">
              <div className="control-group">
                <input
                  type="text"
                  className="login-field"
                  placeholder="username"
                  id="login-name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <label className="login-field-icon fui-user"></label>
              </div>
              <div className="control-group">
                <input
                  type="newPassword"
                  className="login-field"
                  placeholder="Password"
                  id="login-pass"
                  value={newPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="login-field-icon fui-lock"></label>
              </div>
              <div className="control-group">
                <input
                  type="newPassword"
                  className="login-field"
                  placeholder="repeat Password"
                  id="login-repeated-pass"
                  value={repeatedPassword}
                  onChange={(e) => setRepeatedPassword(e.target.value)}
                />
                <label className="login-field-icon fui-lock"></label>
              </div>
              <a className="btn" href="#" onClick={handleSignUp}>
                <p className="LoginP">SING UP</p>
              </a>
              {errorNameMessage ? (
                <p className="ErrorMessage">{errorNameMessage}</p>
              ) : null}
              {errorPasswordMessage ? (
                <p className="ErrorMessage">{errorPasswordMessage}</p>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default SingUp;
