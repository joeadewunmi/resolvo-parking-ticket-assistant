
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Resolvo</title>
        <meta name="description" content="The page you're looking for could not be found." />
      </Helmet>

      <div className="min-h-[calc(100vh-4rem)] bg-background flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="text-orange-500 bg-orange-100 rounded-full p-4 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              404 - Page not found
            </h1>
            
            <p className="mt-4 text-lg text-muted-foreground">
              We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
            </p>
            
            <div className="mt-12">
              <h2 className="text-lg font-semibold text-foreground">
                Popular pages you might be looking for:
              </h2>
              
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto">
                <Link
                  to="/"
                  className="flex items-center justify-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span>Home</span>
                </Link>
                
                <Link
                  to="/local-authorities"
                  className="flex items-center justify-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <span>Find Your Council</span>
                </Link>
                
                <Link
                  to="/appeal-help"
                  className="flex items-center justify-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 6v6l4 2"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  <span>Appeal Hub</span>
                </Link>
                
                <Link
                  to="/faq"
                  className="flex items-center justify-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <span>FAQ</span>
                </Link>
              </div>
            </div>
            
            <div className="mt-12 space-y-4">
              <p className="text-muted-foreground">
                If you think this is a mistake, please{' '}
                <a
                  href="mailto:support@resolvo.uk"
                  className="text-primary hover:underline"
                >
                  contact our support team
                </a>
                .
              </p>
              
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
