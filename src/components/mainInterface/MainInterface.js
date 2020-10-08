import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import NavBar from "./navBar/NavBar";
import SectionDisplay from "./sectionDisplay/SectionDisplay";
import "./mainInterface.css";

export default function MainInterface() {
  return (
    <div className="mainInterface">
      <Header />
      <NavBar />
      <SectionDisplay />
      <Footer />
    </div>
  );
}
