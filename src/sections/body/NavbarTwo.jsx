import React from "react";
import voiceOver_Icon from "../../assets/voiceOver_Icon.png";
import blur_Icon from "../../assets/blur_Icon.png";
import zoom_Icon from "../../assets/zoom_Icon.png";
import cta_Icon from "../../assets/cta_Icon.png";
import customize_Icon from "../../assets/customize_Icon.png";
import autoplay_Icon from "../../assets/autoPlay_Icon.png";
import bannerImage from "../../assets/banner_Image.png";
const NavbarTwo = () => {
  return (
    <div>
      <div
        className="d-flex border justify-content-between "
        style={{
          width: "947px",
          height: "56px",

          padding: "16px 32px",
        }}
      >
        <div>
          <img src={voiceOver_Icon} alt="" />
          <span className="p-1">Voiceover</span>
        </div>
        <div>
          <img src={blur_Icon} alt="" />
          <span className="p-1">Blur</span>
        </div>
        <div>
          <img src={zoom_Icon} alt="" />
          <span className="p-1">Zoom</span>
          <span></span>
        </div>
        <div>
          <img src={cta_Icon} alt="" />
          <span className="p-1">CTA</span>
        </div>
        <div>
          <img src={customize_Icon} alt="" />
          <span className="p-1">Customize</span>
        </div>
        <div>
          <img src={autoplay_Icon} alt="" />
          <span className="p-1">Autoplay</span>
        </div>
      </div>
      {/* Banner  */}
      <div style={{ width: "899px", height: "552px" }}>
        <div className="p-4">
          <img src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavbarTwo;
