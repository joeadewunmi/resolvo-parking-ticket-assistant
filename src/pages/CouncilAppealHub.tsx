import React from 'react';
import { Link } from "react-router-dom";
import { Building, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"; 
import { Helmet } from 'react-helmet-async';
import { allCouncilData } from '@/data/councilData'; // Import the council data
import { supportedCouncils } from '@/data/supportedCouncils';
import TrackingButton from '@/components/ui/TrackingButton';

// Calculate chunks for potential multi-column layout (adjust columns as needed)
const ITEMS_PER_COLUMN = Math.ceil(allCouncilData.length / 3); // Aim for 3 columns
const chunkedCouncils = [];
for (let i = 0; i < allCouncilData.length; i += ITEMS_PER_COLUMN) {
  chunkedCouncils.push(allCouncilData.slice(i, i + ITEMS_PER_COLUMN));
}

// Group councils by first letter
const createAlphabeticalGroups = () => {
  const groupedCouncils = supportedCouncils.reduce((acc: { [key: string]: typeof supportedCouncils }, council) => {
    const firstLetter = council.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(council);
    return acc;
  }, {});

  // Sort the letters alphabetically
  const sortedLetters = Object.keys(groupedCouncils).sort();
  
  // Sort councils within each letter group
  sortedLetters.forEach(letter => {
    groupedCouncils[letter].sort((a, b) => a.name.localeCompare(b.name));
  });

  return { groupedCouncils, sortedLetters };
};

const { groupedCouncils, sortedLetters } = createAlphabeticalGroups();

// Define the component
const CouncilAppealHub = () => {
  return (
    <>
      <Helmet>
        <title>Council Parking Ticket Appeal Information | Resolvo</title>
        <meta name="description" content="Find information and resources to appeal parking tickets from specific UK councils. Get help with your PCN appeal." />
        <link rel="canonical" href="https://resolvo.uk/local-authorities" />
        <meta property="og:title" content="Council Parking Ticket Appeal Information | Resolvo" />
        <meta property="og:description" content="Find information and resources to appeal parking tickets from specific UK councils." />
        <meta property="og:url" content="https://resolvo.uk/local-authorities" />
        <meta name="twitter:title" content="Council Parking Ticket Appeal Information | Resolvo" />
        <meta name="twitter:description" content="Find information and resources to appeal parking tickets from specific UK councils." />
      </Helmet>

      <div className="bg-background text-foreground min-h-screen">
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16">
            <Building className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
              UK Council Parking Appeal Hub
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select your local council from the list below to find specific information and resources for appealing parking charge notices (PCNs).
            </p>
            <div className="mt-8">
              <TrackingButton
                href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
                eventName="appeal_click"
                eventCategory="engagement"
                eventLabel="local_authorities_hero"
                className="px-6 py-3 bg-primary text-white rounded-lg"
              >
                Appeal now
              </TrackingButton>
            </div>
          </div>

          {/* Council List Section */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              {sortedLetters.map((letter) => (
                <div key={letter} className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4" id={letter}>
                    {letter}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groupedCouncils[letter].map((council) => (
                      <Link
                        key={council.slug}
                        to={`/${council.slug}`}
                        className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200 text-gray-700 hover:text-primary"
                        title={`View appeal guide for ${council.name}`}
                      >
                        {council.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Alphabet navigation */}
            <div className="sticky bottom-4 bg-white rounded-lg shadow-lg p-3 mt-8 overflow-x-auto">
              <div className="flex justify-center space-x-2">
                {sortedLetters.map((letter) => (
                  <a
                    key={letter}
                    href={`#${letter}`}
                    className="w-7 h-7 flex items-center justify-center text-sm font-medium rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CouncilAppealHub; 