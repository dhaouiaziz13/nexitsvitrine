import React from "react";
import "../css/Main.css";
export default function Navbar() {
  return (
    <div className="navbar-cont">
      <div className="logo">nexits</div>
      <div className="navbar-element-cont">
        <div className="element">who is it for</div>
        <div className="element">solutions</div>
        <div className="element">pieces</div>
        <div className="element">blog</div>
        <div className="element">contact</div>
      </div>
      <div className="navbar-login-cont">
        <div className="element signinbtn">sign-in</div>
        <div className="element book-btn">book a demo</div>
      </div>
    </div>
  );
}
