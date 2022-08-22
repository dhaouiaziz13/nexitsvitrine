import React from "react";
import "../css/Main.css";
import social from "../images/social.png";
import cursor from "../images/imgcursor.png";
export default function Footer() {
  return (
    <>
      <div className="footer-joinwork">
        <div className="footer-joinwork-text">
          <span className="footer-joinwork-header">
            Join the remote work{" "}
            <span className="footer-joinwork-header-blue">revolution</span>{" "}
          </span>
          <span className="footer-joinwork-smheader">
            Remote work is here to stay. Firstbase helps you create better
            experiences and deliver
            <br />a higher quality of life for your people.
          </span>
        </div>
        <div className="footer-joinwork-input">
          <div className="block1-input-cont">
            <input className="footer-input" placeholder="Work Email" />
            <div className="block1-input-btn">book a demo</div>
          </div>
        </div>
      </div>
      <div className="footer-sep"></div>
      <div className="footer-info">
        <div className="footer-section first">
          <div className="logo">nexits</div>
          <span className="footer-first-text">
            Customize the remote office experience by <br /> branding your
            environment to your company standards.<br/> Personalize the
            <br /> catalogues to the needs of your workforce.
          </span>
          <img
            className="footer-social-img"
            src={social}
            width="112px"
            height="17px"
            alt=""
          />
        </div>
        <div className="footer-section second">
          <span className="second-element sltitle">legal</span>
          <span className="second-element">Terms of use</span>
          <span className="second-element">Privacy policy</span>
          <span className="second-element">Legal notice</span>
        </div>
        <div className="footer-section third">
          <span className="second-element sltitle">Links</span>
          <span className="second-element">Who is it for?</span>
          <span className="second-element">Solutions</span>
          <span className="second-element">Products</span>
        </div>
        <div className="footer-section forth">
          <div className="footer-inp-cont">
            <span className="second-element sltitle">Newsletter</span>
            <div className="footer-joinwork-input">
              <div className="block4-input-cont">
                <input className="footer-last-inp" placeholder="Work Email" />
                <div className="block4-input-btn">
                  <img src={cursor} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
