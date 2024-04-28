import React from "react";
import homeIcon from "../../assets/home_Icon.png";
import playIcon from "../../assets/play_Icon.png";
import graphIcon from "../../assets/graph_Icon.png";
import settingIcon from "../../assets/setting_Icon.png";
import blackRectIcon from "../../assets/blackRectIcon.png";
import girl_Profile from "../../assets/girl_Profile.png";
import plusRect_Icon from "../../assets/plusRect_Icon.png";
import switch_Icon from "../../assets/switch_Icon.png";

const Sidebar = () => {
  return (
    <div
      className="border   d-flex flex-column align-items-center bg-white "
      style={{
        maxWidth: "100px",
        maxHeight: "700px",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Menu icons top div */}
      <div className="d-flex flex-column align-items-center gap-4 p-4 mb-5">
        <div className="">
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            value="#000000"
            className="p-0 border-0 rounded"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
            }}
          />
        </div>
        <div>
          <p>Menu</p>
        </div>
        <div className="custom-hover">
          <img src={homeIcon} alt="" />
        </div>
        <div className="custom-hover">
          <img src={playIcon} alt="" />
        </div>
        <div className="custom-hover">
          <img src={graphIcon} alt="" />
        </div>
        <div className="custom-hover">
          <img src={graphIcon} alt="" />
        </div>
        <div className="custom-hover">
          <img src={settingIcon} alt="" />
        </div>
      </div>
      {/* Bottom icon profile div */}
      <div className="d-flex flex-column align-items-center gap-3 p-5 mt-5">
        <div className="custom-hover">
          <img src={girl_Profile} alt="" />
        </div>
        <div className="custom-hover">
          <img src={plusRect_Icon} alt="" />
        </div>
        <div className="custom-hover">
          <img src={switch_Icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
