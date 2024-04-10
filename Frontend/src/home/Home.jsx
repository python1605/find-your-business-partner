import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BusinessInfo from "./BusinessInfo";

function Home() {
  return (
    <>
      <div className="bg-blue-400">
        <Navbar />
        <BusinessInfo />
        <Footer />
      </div>
    </>
  );
}

export default Home;
