import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        {/* Hotjar Tracking Code */}
        <script>
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6419397,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </script>
      </Helmet>
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
