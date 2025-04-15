import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Resolvo</title>
        <meta name="robots" content="noindex" /> {/* Tell bots not to index this page */}
      </Helmet>
      <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Go back to Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound; 