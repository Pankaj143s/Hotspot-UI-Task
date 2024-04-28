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
    <div>
      <div
        className="d-flex flex-column justify-content-between border  bg-light "
        style={{
          padding: "24px 16px 24px 16px",
          width: "98px",
          height: "800px",
        }}
      >
        {/* Menu Div */}
        <div
          className="d-flex flex-column gap-3"
          style={{ width: "64px", heigh: "352px" }}
        >
          {/* Black Box Div */}
          <div
            className="gap-2"
            style={{ width: "64px", height: "64px", padding: "8px" }}
          >
            <img
              src={blackRectIcon}
              alt=""
              style={{ width: "48px", height: "48px" }}
            />
          </div>
          {/* Menu  Icon Div */}
          <div
            className="d-flex flex-column gap-4"
            style={{
              width: "40px",
              height: "264px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* menu1 */}
            <div>
              <div style={{ width: "35px", height: "16px" }}>
                <p>MENU</p>
              </div>
            </div>
            {/* icon1 */}
            <div
              className="d-flex flex-column gap-2"
              style={{ width: "40px", height: "232px" }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                <img src={homeIcon} alt="" />
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                <img src={playIcon} alt="" />
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                <img src={graphIcon} alt="" />
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                <img src={graphIcon} alt="" />
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                <img src={settingIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Profile Div */}
        <div className="d-flex flex-column justify-content-center align-content-center gap-4 px-2">
          <div>
            <img
              src={girl_Profile}
              alt=""
              style={{ width: "48px", height: "48px" }}
            />
          </div>
          <div className="p-0">
            <img
              src={plusRect_Icon}
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          </div>

          <div className="px-1">
            <img
              src={switch_Icon}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
