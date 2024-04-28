import trashIcon from "../../assets/trash.png";
const EditHotspot = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "30%",
        maxWidth: "550px",
        minWidth: "500px",
      }}
      className=" d-flex flex-column  bg-white   rounded shadow-sm mt-4 p-4"
    >
      <div className="d-flex justify-content-between  ">
        <p>Edit Hotspot</p>
        <div className="">
          <img src={trashIcon} alt="" />
        </div>
      </div>
      <form className="d-flex flex-column gap-4">
        <div className="d-flex flex-column ">
          <label htmlFor="email" className="py-2">
            Hotspot Text
          </label>
          <textarea
            name="email"
            id="email"
            cols="30"
            rows="4"
            placeholder="Enter your email addresss"
            className="p-3 border"
            style={{
              borderColor: "#D7DBEC",
              resize: "none",
              borderRadius: "8px",
            }}
          ></textarea>
        </div>

        <div className="d-flex gap-5">
          <div>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value="#FF0000"
              className=" border-0 rounded"
              style={{
                width: "40px",
                height: "40px",

                borderRadius: "8px",
              }}
            />
            <p>Background Colour</p>
          </div>

          <div>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value="#FF0000"
              className="border-0 rounded"
              style={{
                width: "40px",
                height: "40px",
                border: "none",
                backgroundColor: "#FFFFFF",
              }}
            />
            <p>Text Colour</p>
          </div>
        </div>

        <div>
          <label htmlFor="step">Next Destination On Click</label>
          <select
            className="form-select py-3"
            aria-label="Default select example"
            style={{ color: "#717171" }}
          >
            <option selected>Next Step</option>
          </select>
        </div>

        <div>
          <p>Tooltip Position</p>
          <div className="d-flex gap-3">
            <button
              type="button"
              className="btn  "
              style={{ backgroundColor: "#00668C", color: "#FFFFFF" }}
            >
              Auto
            </button>
            <button type="button" className="btn border ">
              Top
            </button>
            <button type="button" className="btn  border">
              Right
            </button>
            <button type="button" className="btn border ">
              Bottom
            </button>
            <button type="button" className="btn border ">
              Left
            </button>
          </div>
        </div>
        <div className="d-flex gap-5 p-3 mx-auto">
          <button
            type="button"
            className=" btn btn-lg px-5"
            style={{ backgroundColor: "#E8E8E8" }}
          >
            Cancel
          </button>
          <button
            type="button"
            className=" btn  btn-lg px-5"
            style={{ backgroundColor: "#00668C", color: "#FFFFFF" }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditHotspot;
