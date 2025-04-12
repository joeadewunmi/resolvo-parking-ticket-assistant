import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/routeConfig';
import SEOHead from './components/SEOHead';

/**
 * Enhanced App component with SSG support
 * Uses route metadata to improve SEO by ensuring H1 tags and metadata
 * are visible to search engines in the initial HTML
 */
function App() {
  return (
    <Router>
      <SEOHead />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
