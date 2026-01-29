import React, { Children } from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";

function Layout() {
  return (
    <>
      <Navbar />

      {Children ? Children : <Gallery/> }
      <Footer />
    </>
  );
}

export default Layout;
