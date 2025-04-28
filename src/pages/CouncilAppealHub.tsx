import React from 'react';
import { Link } from "react-router-dom";
import { Building, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';
import { allCouncilData } from '@/data/councilData';

// Calculate chunks for potential multi-column layout (adjust columns as needed)
const ITEMS_PER_COLUMN = Math.ceil(allCouncilData.length / 3); // Aim for 3 columns
const chunkedCouncils = [];
for (let i = 0; i < allCouncilData.length; i += ITEMS_PER_COLUMN) {
  chunkedCouncils.push(allCouncilData.slice(i, i + ITEMS_PER_COLUMN));
}

const CouncilAppealHub = () => {
  return (
    <>
      <Helmet>
        <title>Council Parking Ticket Appeal Information | Resolvo</title>
        <meta name="description" content="Find information and resources to appeal parking tickets from specific UK councils. Get help with your PCN appeal." />
        <link rel="canonical" href="https://resolvo.uk/council-appeal-hub" />
        <meta property="og:title" content="Council Parking Ticket Appeal Information | Resolvo" />
        <meta property="og:description" content="Find information and resources to appeal parking tickets from specific UK councils." />
        <meta property="og:url" content="https://resolvo.uk/council-appeal-hub" />
        <meta name="twitter:title" content="Council Parking Ticket Appeal Information | Resolvo" />
        <meta name="twitter:description" content="Find information and resources to appeal parking tickets from specific UK councils." />
      </Helmet>

      <div className="bg-background text-foreground min-h-screen">
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16">
            <Building className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
              UK Council Parking Appeal Hub
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select your local council from the list below to find specific information and resources for appealing parking charge notices (PCNs).
            </p>
          </div>

          {/* Render the full list of councils using the imported data */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chunkedCouncils.map((chunk, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {chunk.map((council) => (
                      <li key={council.slug}>
                        <Link
                          to={council.path}
                          className="group flex items-center text-foreground hover:text-primary transition-colors duration-200"
                          title={`View appeal guide for ${council.name}`}
                        >
                          <span className="flex-1">{council.name}</span>
                          <ArrowRight 
                            className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" 
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Optional: Add a CTA or further info section if desired */}
        {/* 
        <section className="py-16 bg-muted/40">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Appealing?</h2>
            <p className="text-muted-foreground mb-8">Our AI tool can help you draft a personalised appeal letter in minutes.</p>
            <Link to="/appeal-help" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Get Started Now
            </Link>
          </div>
        </section>
        */}
      </div>
    </>
  );
};

export default CouncilAppealHub;
