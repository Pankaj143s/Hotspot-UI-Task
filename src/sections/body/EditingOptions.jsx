import React from "react";
import voiceOver_Icon from "../../assets/voiceOver_Icon.png";
import blur_Icon from "../../assets/blur_Icon.png";
import zoom_Icon from "../../assets/zoom_Icon.png";
import cta_Icon from "../../assets/cta_Icon.png";
import customize_Icon from "../../assets/customize_Icon.png";
import autoplay_Icon from "../../assets/autoPlay_Icon.png";
import bannerImage from "../../assets/banner_Image.png";
import EditHotspot from "./EditHotspot";

const EditingOptions = () => {
  return (
    // Div containing navbar and right side
    <div style={{ width: "100%" }}>
      <div>
        {/* Navbar Two */}
        <div className="d-flex border justify-content-between align-items-center p-4 ">
          <div className="custom-hover">
            <img src={voiceOver_Icon} alt="" />
            <span className="p-1">Voiceover</span>
          </div>
          <div className="custom-hover">
            <img src={blur_Icon} alt="" />
            <span className="p-1">Blur</span>
          </div>
          <div className="custom-hover">
            <img src={zoom_Icon} alt="" />
            <span className="p-1">Zoom</span>
            <span></span>
          </div>
          <div className="custom-hover">
            <img src={cta_Icon} alt="" />
            <span className="p-1">CTA</span>
          </div>
          <div className="custom-hover">
            <img src={customize_Icon} alt="" />
            <span className="p-1">Customize</span>
          </div>
          <div className="custom-hover">
            <img src={autoplay_Icon} alt="" />
            <span className="p-1">Autoplay</span>
          </div>
        </div>
        {/* Banner Image  */}
        <div className="p-3">
          <img src={bannerImage} alt="" style={{ width: "100%" }} />
          <EditHotspot />
        </div>
      </div>
    </div>
  );
};

export default EditingOptions;
