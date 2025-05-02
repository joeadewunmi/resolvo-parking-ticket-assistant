import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AlertCircle, Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Resolvo</title>
        <meta name="description" content="The page you're looking for could not be found." />
      </Helmet>

      <div className="min-h-[calc(100vh-4rem)] bg-background flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="flex justify-center">
            <AlertCircle className="h-24 w-24 text-yellow-400" />
          </div>
          
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Page not found
          </h1>
          
          <p className="mt-4 text-lg text-muted-foreground">
            Sorry, we couldn't find the page you're looking for.
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
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              
              <Link
                to="/local-authorities"
                className="flex items-center justify-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <Search className="h-5 w-5" />
                <span>Find Your Council</span>
              </Link>
              
              <Link
                to="/appeal-help"
                className="flex items-center justify-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Appeal Hub</span>
              </Link>
              
              <Link
                to="/faq"
                className="flex items-center justify-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <Search className="h-5 w-5" />
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
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound; 