import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { councilNames } from '../../scripts/council-slugs.js';

const CouncilList = () => {
  const location = useLocation();
  const scrollTimeout = useRef<NodeJS.Timeout>();

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

  // Group councils by first letter
  const groupedCouncils = councilNames.reduce((acc: { [key: string]: string[] }, council) => {
    const firstLetter = council[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(council);
    return acc;
  }, {});

  // Sort the letters
  const sortedLetters = Object.keys(groupedCouncils).sort();

  // Handle smooth scrolling when clicking letter links
  const scrollToSection = (letter: string) => {
    const section = document.getElementById(letter);
    if (section) {
      // Clear any existing scroll timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Get the header height (assuming it's 64px, adjust if different)
      const headerHeight = 64;
      
      // Calculate the element's position relative to the viewport
      const elementPosition = section.getBoundingClientRect().top;
      
      // Calculate the offset position
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 24;

      // Scroll to the section with smooth behavior
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL hash after scrolling
      scrollTimeout.current = setTimeout(() => {
        window.history.replaceState(null, '', `#${letter}`);
      }, 500);
    }
  };

  // Handle initial hash in URL
  useEffect(() => {
    if (location.hash) {
      const letter = location.hash.replace('#', '');
      // Add a small delay to ensure the page is fully rendered
      setTimeout(() => {
        scrollToSection(letter);
      }, 100);
    }
    
    // Cleanup timeout on unmount
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [location]);

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

        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          {sortedLetters.map((letter) => (
            <div key={letter} className="mb-8 scroll-mt-24" id={letter}>
              <h2 className="text-2xl font-bold text-primary mb-4">
                {letter}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedCouncils[letter].sort().map((council) => (
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
          ))}
        </div>

        {/* Alphabet navigation */}
        <div className="sticky bottom-4 bg-white rounded-lg shadow-lg p-3 mt-8 overflow-x-auto z-10">
          <div className="flex justify-center space-x-2">
            {sortedLetters.map((letter) => (
              <button
                key={letter}
                onClick={() => scrollToSection(letter)}
                className="w-7 h-7 flex items-center justify-center text-sm font-medium rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouncilList; 