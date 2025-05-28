import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../utils/ScrollToTop";

const Layout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Control scroll restoration globally
  useEffect(() => {
    // When the app first loads
    window.history.scrollRestoration = "manual";
    
    // Set loading to false after initial render
    setIsLoading(false);
    
    // Clean up
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className={`flex-grow ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
