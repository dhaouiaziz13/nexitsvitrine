import React from "react";
import "../css/Main.css";
import img4 from "../images/img4.png";
export default function WhoElement({ title }) {
  return (
    <>
      <div className="whoelement-title">{title}</div>
      <div className="whoelement-card">
        <div className="whoelemnt-img">
          <img width="295.18px" height="193px" alt="" src={img4} />
        </div>
        <div className="whoelement-text">
          <span className="whoelement-card-text-title">
            Discovering User/Admin
          </span>
          <br />
          <span className="whoelement-card-text-p">
            Create an immersive onboarding experience which your employees will
            love. <br /> Automate your timely workflow day one
          </span>
        </div>
      </div>
      {/*  */}
      <div className="whoelement-card-reverse">
        <div className="whoelemnt-img">
          <img width="295.18px" height="193px" alt="" src={img4} />
        </div>
        <div className="whoelement-text">
          <span className="whoelement-card-text-title">
            Discovering User/Admin
          </span>
          <br />
          <span className="whoelement-card-text-p">
            Create an immersive onboarding experience which your employees will
            love. <br /> Automate your timely workflow day one
          </span>
        </div>
      </div>
      {/*  */}
      <div className="whoelement-card">
        <div className="whoelemnt-img">
          <img width="295.18px" height="193px" alt="" src={img4} />
        </div>
        <div className="whoelement-text">
          <span className="whoelement-card-text-title">
            Discovering User/Admin
          </span>
          <br />
          <span className="whoelement-card-text-p">
            Create an immersive onboarding experience which your employees will
            love. <br /> Automate your timely workflow day one
          </span>
        </div>
      </div>
    </>
  );
}
