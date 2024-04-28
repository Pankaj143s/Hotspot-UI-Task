import React from "react";
import frameZero from "../../assets/frame_Zero.png";
import frameOne from "../../assets/frame_One.png";
import frameTwo from "../../assets/frame_Two.png";
import frameThree from "../../assets/frame_Three.png";
import plusIcon from "../../assets/plus_Icon.png";

const RightSidebar = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2 border">
      <div className="d-flex flex-column  m-0  align-items-center p-5">
        <img src={frameZero} alt="" />
        <p>Add Chapters</p>
        <img src={plusIcon} alt="" className="custom-hover" />
      </div>
      <div className="d-flex flex-column  m-0  align-items-center p-2 gap-3">
        <img src={frameOne} alt="" />
        <img src={plusIcon} alt="" className="custom-hover" />
      </div>
      <div className="d-flex flex-column  m-0  align-items-center p-2 gap-3">
        <img src={frameTwo} alt="" />
        <img src={plusIcon} alt="" className="custom-hover" />
      </div>
      <div className="d-flex flex-column  m-0  align-items-center p-2 gap-3">
        <img
          src={frameThree}
          alt="d-flex flex-column  m-0  align-items-center p-2"
        />
        <img src={plusIcon} alt="" className="custom-hover" />
      </div>
    </div>
  );
};

export default RightSidebar;
