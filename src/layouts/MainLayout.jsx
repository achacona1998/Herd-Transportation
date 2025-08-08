import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 bg-gradient-to-b from-[#021f0d] via-[#093616] to-[#094914] pb-10 sm:pb-16 md:pb-20 overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
