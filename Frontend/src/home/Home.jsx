import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BusinessInfo from "./BusinessInfo";
import PrimeMembers from "./primeMembers";
import SuccessStories from "./successStories";

function Home() {
  return (
    <>
      <div className="bg-blue-400">
        <Navbar />
        <BusinessInfo />
        <PrimeMembers />
        <SuccessStories />
        <Footer />
      </div>
    </>
  );
}

export default Home;
