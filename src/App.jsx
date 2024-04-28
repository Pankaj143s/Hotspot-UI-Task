import "./App.css";
import Banner from "./sections/body/Banner";
import Navbar from "./sections/body/Navbar";
import NavbarTwo from "./sections/body/NavbarTwo";
import RightSideBar from "./sections/sidebar/RightSideBar";
import Sidebar from "./sections/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div>
          <Navbar />
          <div className="d-flex">
            <NavbarTwo />
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
