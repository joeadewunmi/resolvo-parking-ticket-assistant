
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { routeConfig } from "./routes/routeConfig";

/**
 * Enhanced App component with SSG support
 * Uses route metadata to improve SEO by ensuring H1 tags and metadata
 * are visible to search engines in the initial HTML
 */
const App = () => {
  const router = createBrowserRouter(routeConfig);

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
