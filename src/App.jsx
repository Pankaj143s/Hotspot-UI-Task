import "./App.css";

import Navbar from "./sections/body/Navbar";

import EditingOptions from "./sections/body/EditingOptions";

import RightSidebar from "./sections/sidebar/RightSidebar";

import Sidebar from "./sections/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="d-flex flex-row">
        <Sidebar />
        <div style={{ width: "100%" }}>
          <Navbar />
          <div className="d-flex">
            <EditingOptions />
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
