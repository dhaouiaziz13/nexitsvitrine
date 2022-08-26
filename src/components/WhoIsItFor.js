import React from "react";
import Navbar from "./Navbar";
import WhoElement from "./WhoElement";
import Footer from "./Footer";
export default function WhoIsItFor() {
  return (
    <>
      <Navbar />
      <div className="who-block1-cont">
        <div className="who-block1-title">Who is it for?</div>
        <div className="who-block1-services">
          <span>Facilities </span>
          <span>Finance</span>
          <span>Human Ressources</span>
          <span>IT Management</span>
          <span>Operations</span>
        </div>
        <div className="who-block1-p">
          Create an immersive onboarding experience which your employees will
          love. Automate your timely workflows, and make <br/>sure everyone is
          equipped with the right ergonomic equipment from day one
        </div>
        <div className="who-block1-btns">
            <div className="who-bookbtn">book a demo</div>
            <div className="who-trialbtn">free trial -{">"}</div>
        </div>
      </div>
      {/* block2 */}
      <WhoElement title='Facilities'/>
      <WhoElement title='Finance'/>
      <WhoElement title='Human Ressources'/>
      <WhoElement title='IT Management'/>
      <WhoElement title='Operations'/>
      <Footer showjoin={true}/>
    </>
  );
}
