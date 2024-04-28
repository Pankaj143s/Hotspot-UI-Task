import React from "react";
import searchICon from "../../assets/search_Icon.png";
import girlProfile from "../../assets/girl_Profile.png";
import bellIcon from "../../assets/bell_Icon.png";

const Navbar = () => {
  return (
    <div
      className="d-flex border User
    navbar-expand-xl"
    >
      {/* Back Demo1 Search div */}
      <div
        className="d-flex align-items-center justify-content-around"
        style={{ width: "856px", height: "64px", padding: "0px 48px" }}
      >
        <div>
          <button
            style={{
              backgroundColor: "#00668C",
              width: "184px",
              height: "48px",
              color: "#FFFFFF",
              border: "none",
            }}
            className="rounded"
          >
            Back
          </button>
        </div>
        <div className="align-content-center">Demo 1</div>
        <div>
          <div
            className=" align-content-center input-group border rounded"
            style={{
              borderColor: "#D7DBEC",
              width: "391px",
              height: "48px",
              padding: "12px 16px",
            }}
          >
            <input
              type="text"
              placeholder="Search"
              className="form-control border-0 bg-transparent"
            />
            <div className="input-group-append">
              <span className="input-group-text bg-transparent border-0">
                <img src={searchICon} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Preview Share Bell Profile div */}
      <div
        className="d-flex align-items-center  gap-2"
        style={{ width: "522px", height: "64px" }}
      >
        <div>
          <button
            style={{
              backgroundColor: "#00668C",
              width: "137px",
              height: "48px",
              color: "#FFFFFF",
              border: "none",
            }}
            className="rounded gap-1"
          >
            Preview
          </button>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#00668C",
              width: "137px",
              height: "48px",
              color: "#FFFFFF",
              border: "none",
            }}
            className="rounded"
          >
            Share
          </button>
        </div>
        <div className="d-flex gap-2">
          <img
            src={bellIcon}
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
          <img
            src={girlProfile}
            alt=""
            style={{ width: "24px", height: "24px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
