import "../assets/Styled-SingUp.css";
import { useState } from "react";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
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
              ></input>
              <label className="login-field-icon fui-user"></label>
            </div>
            <div className="control-group">
              <input
                type="current-password"
                className="login-field"
                placeholder="password"
                id="login-pass"
              ></input>
              <label className="login-field-icon fui-lock"></label>
            </div>
            <a className="btn" href="#">
              <h5>Hello</h5>
              <p className="LoginP">SING UP</p>
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SingUp;
