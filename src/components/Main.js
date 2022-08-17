import React from "react";
import Navbar from "./Navbar";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import SmallCardMain from "../components/SmallCardMain";
import img3 from "../images/img3.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import BigFlexCard from "./BigFlexCard";
// import img4 from "../images/img4.png";
// import img5 from "../images/img5.png";
// import img6 from "../images/img6.png";
import "../css/Main.css";
export default function Main() {
  return (
    <>
      <Navbar />
      {/* block1 */}
      <div className="block1-cont">
        <div className="block1-text-cont">
          <span className="block1-big-header">equip remote</span>
          <br />
          <span className="block1-big-header">teams globally</span>
          <br />
          <span className="block1-big-header colored">in few clicks</span>
          <span className="block1-small-header">
            Provide and maintain any kind of remote equipment for
          </span>
          <br />
          <span className="block1-small-header">
            your workforce, no matter where they are
          </span>
          <div className="block1-input-cont">
            <input className="block1-input" placeholder="Work Email" />
            <div className="block1-input-btn">Get started </div>
          </div>
        </div>
        <div className="block1-img-cont">
          <img
            classname="block1-img"
            src={img1}
            alt=" "
            width="409px"
            height="450px"
          />
        </div>
      </div>
      {/* block2 */}
      <div className="block2-cont">
        <div className="block2-img-cont">
          <img alt=" " src={img2} />
        </div>
        <span className="block2-trustedby">Trusted by top-tier employers</span>
      </div>
      {/* block3 */}
      <div className="block3-cont">
        <div className="block3-big-header">
          One platform. All your equipment needs
        </div>
        <div className="block3-images-cont">
          <SmallCardMain
            imageurl={img3}
            title="User Management"
            text="
            Provide, maintain and manage all your IT, Furniture and any other remote assets bought in and outside of Workwize, all around the world"
          />
          <SmallCardMain
            imageurl={img3}
            title="User Management"
            text="
            Provide, maintain and manage all your IT, Furniture and any other remote assets bought in and outside of Workwize, all around the world"
          />
          <SmallCardMain
            imageurl={img3}
            title="User Management"
            text="
            Provide, maintain and manage all your IT, Furniture and any other remote assets bought in and outside of Workwize, all around the world"
          />
          <SmallCardMain
            imageurl={img3}
            title="User Management"
            text="
            Provide, maintain and manage all your IT, Furniture and any other remote assets bought in and outside of Workwize, all around the world"
          />
        </div>
      </div>
      {/* block4 */}
      <div className="block4-cont">
        <img src={img7} alt="" />
      </div>
      {/* block5 */}
      <div className="block5-cont">
        <BigFlexCard
          title="The only platform to 
          manage all "
          blue="remote assets"
          imgurl={img8}
        />
           <BigFlexCard
           reverse={true}
          title="The only platform to 
          manage all "
          blue="remote assets"
          imgurl={img8}
        />
           <BigFlexCard
          title="The only platform to 
          manage all "
          blue="remote assets"
          imgurl={img8}
        />
           <BigFlexCard
           reverse={true}
          title="The only platform to 
          manage all "
          blue="remote assets"
          imgurl={img8}
        />
      </div>
      {/* block6 */}
      <div className="block6-cont">
        <img src={img7} alt="" />
      </div>
    </>
  );
}
