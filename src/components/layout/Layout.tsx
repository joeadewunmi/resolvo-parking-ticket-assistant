import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../utils/ScrollToTop";
import { Skeleton } from "@/components/ui/skeleton";

const Layout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Control scroll restoration globally
  useEffect(() => {
    // When the app first loads
    window.history.scrollRestoration = "manual";
    
    // Set loading to false after initial render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // Small delay to ensure proper hydration
    
    // Clean up
    return () => {
      window.history.scrollRestoration = "auto";
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow relative">
        {isLoading ? (
          <div className="w-full h-full absolute inset-0 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="h-64 bg-gray-200 rounded"></div>
                  <div className="h-64 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
