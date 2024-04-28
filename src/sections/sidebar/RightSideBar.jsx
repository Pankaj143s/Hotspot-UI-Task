import React from "react";
import frameZero from "../../assets/frame_Zero.png";
import frameOne from "../../assets/frame_One.png";
import frameTwo from "../../assets/frame_Two.png";
import frameThree from "../../assets/frame_Three.png";
import plusIcon from "../../assets/plus_Icon.png";

const RightSideBar = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center gap-5 border"
      style={{ width: "395px", height: "960px" }}
    >
      <div
        className="d-flex flex-column gap-2 align-items-center justify-content-center"
        style={{ width: "312px", height: "192px" }}
      >
        <img src={frameZero} alt="" />

        <p>Add Chapters</p>
        <img src={plusIcon} alt="" />
      </div>
      <div
        className="d-flex flex-column gap-2 align-items-center"
        style={{ width: "312px", height: "192px" }}
      >
        <img src={frameOne} alt="" />
        <img src={plusIcon} alt="" />
      </div>
      <div
        className="d-flex flex-column gap-2 align-items-center"
        style={{ width: "312px", height: "192px" }}
      >
        <img src={frameTwo} alt="" />
        <img src={plusIcon} alt="" />
      </div>
      <div
        className="d-flex flex-column gap-2 align-items-center"
        style={{ width: "312px", height: "192px" }}
      >
        <img src={frameThree} alt="" />
        <img src={plusIcon} alt="" />
      </div>
    </div>
  );
};

export default RightSideBar;
