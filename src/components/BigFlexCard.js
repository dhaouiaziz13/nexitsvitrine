import React from "react";
import "../css/Main.css";
export default function BigFlexCard({ imgurl, title, blue,reverse }) {
  return (
    <div className={reverse?"BigFlexCard-cont":"BigFlexCard-cont-rev"}>
      <div className="BigFlexCard-text-cont">
        <div className="BigFlexCard-text-title ">
          {title} <br />
          <span className="BigFlexCard-text-blue">{blue}</span>
        </div>
        <div className="BigFlexCard-text-p">
          Manage all assets bought in and outside of Workwize.
          <br /> Gain overview of what remote assets have been provided to your
          workforce.
          <br />
          <div className="BigFlexCard-text-list">
            1.Provide only fully ergonomically certified equipment
            <br />
            2.Manage IT and Furniture items bought anywhere
            <br />
            3.Identify your current and total remote expenditure
          </div>
        </div>
        <div className="BigFlexCard-text-btn-cont">
          {" "}
          <div className="block1-input-btn">book a demo </div>{" "}
          <span className="SmallCardMain-tryit">free trial {"->"} </span>
        </div>
      </div>
      <div className="BigFlexCard-img-cont">
        <img src={imgurl} alt=" " width="498px" height="329px" />
      </div>
    </div>
  );
}
