import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { councilNames } from '../../scripts/council-slugs.js';

const CouncilList = () => {

  // Function to create URL-friendly slug
  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  // Sort all council names alphabetically
  const sortedCouncilNames = [...councilNames].sort();

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>UK Council Parking Appeals | Resolvo</title>
        <meta 
          name="description" 
          content="Find information about parking ticket appeals for all UK councils. Get help with your council parking ticket appeal."
        />
        <link rel="canonical" href="https://resolvo.uk/councils" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://resolvo.uk/councils" />
        <meta property="og:title" content="UK Council Parking Appeals | Resolvo" />
        <meta property="og:description" content="Find information about parking ticket appeals for all UK councils. Get help with your council parking ticket appeal." />
        <meta property="og:image" content="https://resolvo.uk/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png" />
        <meta property="og:locale" content="en_GB" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="resolvo.uk" />
        <meta property="twitter:url" content="https://resolvo.uk/councils" />
        <meta name="twitter:title" content="UK Council Parking Appeals | Resolvo" />
        <meta name="twitter:description" content="Find information about parking ticket appeals for all UK councils. Get help with your council parking ticket appeal." />
        <meta name="twitter:image" content="https://resolvo.uk/lovable-uploads/cee6d857-8576-462f-ad15-9e908770e483.png" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UK Council Parking Appeals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your council below to get specific information about appealing your parking ticket
            and start your appeal process.
          </p>
        </div>

        {/* Display all councils in a single alphabetical list */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedCouncilNames.map((council) => (
              <Link
                key={council}
                to={`/${createSlug(council)}`}
                className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200 text-gray-700 hover:text-primary"
              >
                {council}
              </Link>
            ))}
          </div>
        </div>

        {/* Removed the Alphabet navigation */}
      </div>
    </div>
  );
};

export default CouncilList; 