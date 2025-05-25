import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../utils/ScrollToTop";

const Layout = () => {
  const location = useLocation();

  // Control scroll restoration globally
  useEffect(() => {
    // When the app first loads
    window.history.scrollRestoration = "manual";
    
    // Clean up
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
