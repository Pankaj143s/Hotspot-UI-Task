import React from "react";
import searchICon from "../../assets/search_Icon.png";
import girlProfile from "../../assets/girl_Profile.png";
import bellIcon from "../../assets/bell_Icon.png";

const NavbarTest = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center p-3 border">
      {/* Back */}
      <div className="px-5">
        <button
          style={{
            backgroundColor: "#00668C",
            color: "#FFFFFF",
            border: "none",
          }}
          className="btn btn-lg  px-5  fs-6 rounded"
        >
          Back
        </button>
      </div>
      {/* Demo 1 */}
      <div className="px-5">
        {" "}
        <p className="m-0">Demo 1</p>
      </div>

      {/* Search */}
      <div className="px-5">
        <div className="container " style={{ maxWidth: "300px" }}>
          <div className="row justify-content-center">
            <div className="col">
              <div className="input-group border rounded">
                <input
                  type="text"
                  className="form-control border-0 "
                  placeholder="Search"
                />
                <span className="input-group-text border-0 bg-transparent">
                  <img src={searchICon} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Preview */}
      <div className="px-2">
        <button
          style={{
            backgroundColor: "#00668C",
            color: "#FFFFFF",
            border: "none",
          }}
          className="btn btn-lg px-5 fs-6 rounded"
        >
          Preview
        </button>
      </div>
      {/* Share */}
      <div className="px-2">
        {" "}
        <button
          style={{
            backgroundColor: "#00668C",
            color: "#FFFFFF",
            border: "none",
          }}
          className="btn btn-lg px-5 fs-6 rounded"
        >
          Share
        </button>
      </div>
      {/* Bell */}
      <div className="px-2">
        <div className="d-flex gap-3">
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

export default NavbarTest;
