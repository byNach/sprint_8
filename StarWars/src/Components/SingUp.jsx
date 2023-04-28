import "../assets/Styled-SingUp.css";
import { useState, useContext } from "react";
import { IsLoggedContext } from "../Context/isLoggedContext";

const SingUp = () => {
  const { changeLoggedTrue } = useContext(IsLoggedContext);

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
  };
  const setLoggedTrue = () => {
    changeLoggedTrue();
  };

  return (
    <form>
      <div className="login">
        <div className="login-screen">
          {userNameValid && passwordValid ? (
            <>
              {saveUserCredentials()}
              {seeLocalStorageLog()}
              {setLoggedTrue()}
              <div className="LoginSuccesBase">
                <p className="LoginSucces">Hello {userName},</p>
                <p className="LoginSucces">You joined the force!</p>
                <div>
                  <img src="..\src\assets\Images\baby-yoda-lacasito.gif"></img>
                </div>
                <p>
                  <a href="https://giphy.com/gifs/disneyplus-the-mandalorian-mando-themandalorian-AcfTF7tyikWyroP0x7"></a>
                </p>
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
                  type="password"
                  className="login-field"
                  placeholder="password"
                  id="login-pass"
                  value={newPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="login-field-icon fui-lock"></label>
              </div>
              <div className="control-group">
                <input
                  type="password"
                  className="login-field"
                  placeholder="repeat password"
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
