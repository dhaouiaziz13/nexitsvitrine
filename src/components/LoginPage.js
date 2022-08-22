import React from "react";
import "../css/Main.css";
import google from "../images/google.png";
import microsoft from "../images/microsoft.png";
export default function LoginPage() {
  return (
    <div className="login-cont">
      <div className="login-form-cont">
        <span className="login-form-title">Sign in to Nexits</span>
        <div className="login-inputscnt">
          <div className="oauth-google forminp">
            {" "}
            <img alt="" src={google} /> Sign in with Google
          </div>
          <div className="oauth-microsoft forminp">
            {" "}
            <img alt="" src={microsoft} /> Sign in with Microsoft
          </div>
          <div className="separator">
            <div className="sepline"></div>
            <span className="sep-text">or</span>
          </div>

          <input
            placeholder="Email adress"
            className="login-form-email forminp"
          />
          <input placeholder="password" className="login-form-pass forminp" />

          <div className="login-rememberme">
            {/* <div className="login-remeberme-cont"> */}
              <input type="checkbox" value="" />
              <span className="login-rememberme">remember me</span>
            {/* </div> */}
            <span className="login-forgotpass">forgot password ?</span>
          </div>
          <div className="signin-btn forminp">sign in</div>
        </div>
      </div>
    </div>
  );
}
