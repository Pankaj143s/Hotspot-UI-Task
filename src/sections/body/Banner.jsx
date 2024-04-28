import React from "react";
import banerImage from "../../assets/banner_Image.png";

const Banner = () => {
  return (
    <div className="border rounded" style={{ width: "899px", height: "552px" }}>
      <div>
        <img src={banerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
