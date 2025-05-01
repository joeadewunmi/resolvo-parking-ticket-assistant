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

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>UK Council Parking Appeals | Resolvo</title>
        <meta 
          name="description" 
          content="Find information about parking ticket appeals for all UK councils. Get help with your council parking ticket appeal."
        />
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
            <div key={letter} className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4" id={letter}>
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
        <div className="sticky bottom-0 bg-white shadow-lg mt-8 p-4 rounded-lg">
          <div className="flex flex-wrap justify-center gap-2">
            {sortedLetters.map((letter) => (
              <a
                key={letter}
                href={`#${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouncilList; 