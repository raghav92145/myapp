import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      <div style={{ padding: "40px", textAlign: "center" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
