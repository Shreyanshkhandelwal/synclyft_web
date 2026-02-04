import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollTopButton";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#112c3d] text-white font-sans">
      
      <Navbar />

      <main>
        <Outlet />
      </main>

      <ScrollTopButton />

      <CtaSection />

      <Footer />
    </div>
  );
};

export default Layout;
