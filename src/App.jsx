import "./App.css";
import Banner from "./sections/body/Banner";
import Navbar from "./sections/body/Navbar";
import NavbarTest from "./sections/body/NavbarTest";
import NavbarTwo from "./sections/body/NavbarTwo";
import NavbarTwoTest from "./sections/body/NavbarTwoTest";
import RightSideBar from "./sections/sidebar/RightSideBar";
import RightSidebarTest from "./sections/sidebar/RightSidebarTest";
import Sidebar from "./sections/sidebar/Sidebar";
import SidebarTest from "./sections/sidebar/SidebarTest";

function App() {
  return (
    <>
      <div className="d-flex flex-row">
        <SidebarTest />
        <div style={{ width: "100%" }}>
          <NavbarTest />
          <div className="d-flex">
            <NavbarTwoTest />
            <RightSidebarTest />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
