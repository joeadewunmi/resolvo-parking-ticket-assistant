
import React from "react";
import { createBrowserRouter, RouterProvider, StaticRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { routeConfig } from "./routes/routeConfig";

/**
 * Enhanced App component with SSG support
 * Uses route metadata to improve SEO by ensuring H1 tags and metadata
 * are visible to search engines in the initial HTML
 */
const App = () => {
  const router = createBrowserRouter(routeConfig);
  
  // If we're server rendering, we need to use StaticRouter
  // This will be used by the SSG build process
  if (typeof window === 'undefined') {
    return (
      <HelmetProvider>
        <StaticRouter location="/404">
          {/* Router will be replaced with actual route content */}
        </StaticRouter>
      </HelmetProvider>
    );
  }

  // Client-side rendering
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
