import React from "react";
import "../css/Main.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate =useNavigate()
  return (
    <div className="navbar-cont">
      <div onClick={()=>navigate('/')} className="logo">nexits</div>
      <div className="navbar-element-cont">
        <div onClick={()=>navigate('/whoisitfor')} className="element">who is it for</div>
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
