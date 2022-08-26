import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/Main.css";
export default function Pricing() {
const start=["Budget Creation","Country/Role Definitions","Limited Data Dashboard"]
const Plus=["Budget Creation","Country/Role Definitions","Limited Data Dashboard","Unlimited Accounts","Dedicated Support Team","Enhanced Data Dashboard"]
const BusinessPlus=["Budget Creation","Country/Role Definitions","Limited Data Dashboard","Unlimited Accounts","Dedicated Support Team","Enhanced Data Dashboard","Enhanced Data Dashboard"]
const Entrprise=["Budget Creation","Country/Role Definitions","Limited Data Dashboard","Unlimited Accounts","Dedicated Support Team","Enhanced Data Dashboard","Enhanced Data Dashboard ","SSO Okta, and more","Customer Success"]
  return (
    <div>
      <Navbar />
      <div className="prix-title-cont">
        <div className="prix-header">Pricing Table</div>
        <div className="prix-p">
          Create an immersive onboarding experience which your employees will
          love. Automate your timely workflows, and make <br />
          sure everyone is equipped with the right ergonomic equipment from day
          one
        </div>
      </div>
      <div className="prix-table-cont">
        <div className="prix-table-row">
          <div className="prix-row-text-cont">
            <div className="prix-title-price">
              <div className="offername">Start</div>
              <div className="offerprice">free</div>
            </div>
            <div className="prix-features">
            {start.map((item,i)=>{
                return(
                  <span className="feature-item"><span className="entity">✓</span> {item}</span>
                )
              })}
            </div>
          </div>
          <div className="prix-btn">Book a Demo</div>
        </div>
        <div className="prix-table-row prix-blue">
          <div className="prix-row-text-cont">
            <div className="prix-title-price">
              <div className="offername">Plus</div>
              <div className="offerprice">$19.99</div>
            </div>
            <div className="prix-features">
            {Plus.map((item,i)=>{
                return(
                  <span className="feature-item"><span className="entity-white">✓</span> {item}</span>
                )
              })}
            </div>
          </div>
          <div className="prix-btn prix-grey">Book a Demo</div>
        </div>
        <div className="prix-table-row">
          <div className="prix-row-text-cont">
            <div className="prix-title-price">
              <div className="offername">Business Plus</div>
              <div className="offerprice">$19.99</div>
            </div>
            <div className="prix-features">
            {BusinessPlus.map((item,i)=>{
                return(
                  <span className="feature-item"><span className="entity">✓</span> {item}</span>
                )
              })}
            </div>
          </div>
          <div className="prix-btn">Book a Demo</div>
        </div>
        <div className="prix-table-row">
          <div className="prix-row-text-cont">
            <div className="prix-title-price">
              <div className="offername">Entreprise</div>
              <div className="offerprice">$19.99</div>
            </div>
            <div className="prix-features">
            {Entrprise.map((item,i)=>{
                return(
                  <span className="feature-item"><span className="entity">✓</span> {item}</span>
                )
              })}
            </div>
          </div>
          <div className="prix-btn">Book a Demo</div>
        </div>
      </div>
      <Footer  />
    </div>
  );
}
