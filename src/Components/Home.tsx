import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "37vw" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Home;
